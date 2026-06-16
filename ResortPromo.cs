using System;
using System.Collections.Generic;
using Newtonsoft.Json;
using Oxide.Core;
using Oxide.Core.Libraries;
namespace Oxide.Plugins;

[Info("ResortPromo", "CASHR#6906", "1.0.0")]
internal class ResortPromo : RustPlugin
{
    private Configuration _config;
    #region Config

    private class Configuration
    {
        [JsonProperty(PropertyName = "Список команд, которые надо выполнить. %STEAMID% для указания стимид игрока", ObjectCreationHandling = ObjectCreationHandling.Replace)]
        public List<string> Commands = new()
        {
	    "addgroup %STEAMID% BEACH 1d"
        };

        [JsonProperty(PropertyName = "Адрес на активацию", ObjectCreationHandling = ObjectCreationHandling.Replace)]
        public string ActivateUrl = "https://rustresort.com/api/activate";
        [JsonProperty(PropertyName = "Адрес на Получение", ObjectCreationHandling = ObjectCreationHandling.Replace)]
        public string GetPromoUrl = "https://rustresort.com/api/promo/get";
    }

    protected override void LoadConfig()
    {
        base.LoadConfig();
        try
        {
            _config = Config.ReadObject<Configuration>();
            if (_config == null) throw new Exception();
            SaveConfig();
        }
        catch
        {
            PrintError("Your configuration file contains an error. Using default configuration values.");
            LoadDefaultConfig();
        }
    }

    protected override void SaveConfig()
    {
        Config.WriteObject(_config);
    }

    protected override void LoadDefaultConfig()
    {
        _config = new Configuration();
    }

    #endregion

    #region OxideHooks

    private void OnServerInitialized()
    {
     webrequest.Enqueue(_config.GetPromoUrl, null, (code, response) =>
     {
         if (code != 200)
         {
             PrintError($"Api returned: {code}:{response}");
             return;
         }

         var result = JsonConvert.DeserializeObject<List<string>>(response);
         foreach (var check in result)
         {
             cmd.AddChatCommand(check, this, CmdChat);
         }
     }, this, RequestMethod.GET, null);
    }
    #endregion


    #region Function

    private void CmdChat(BasePlayer player, string command, string[] args)
    {
        player.ChatMessage("Начали активацию промокода");
        var body = new
        {
            promo = command.ToLower(),
            steam_id = player.UserIDString,
            server_ip = Utility.GetLocalIP().ToString()
        };
        var bodyJson = JsonConvert.SerializeObject(body);
        webrequest.Enqueue(_config.ActivateUrl, bodyJson, (code, response) =>
        {
            if (code != 200)
            {
                if (code != 409)
                {
                    PrintError($"Api returned: {code}:{response}");
                    player.ChatMessage($"Произошла ошибка активации промокода, обратитесь к администрактору CODE: {code}");
                return;
                    
                }
                player.ChatMessage("Вы уже активировали этот промокод.");
                return;
                
            }
            foreach (var check in _config.Commands)
            {
                rust.RunServerCommand(check.Replace("%STEAMID%", player.UserIDString));
            }
            player.ChatMessage("Промокод успешно активирован");
        }, this, RequestMethod.POST, new()
        {
            ["Content-Type"] = "application/json"
        });
    }
    
    #endregion
}