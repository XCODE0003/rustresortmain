GET
/public/bans
Retreive bans

Rate limits: 3 request per 1 second

Parameters
Try it out
Name	Description
sort_by *
string
(query)
Available values : created, updated


created
project_id
number
(query)
project_id
exclude_stale
boolean
(query)
Hide expired/unbanned bans


--
steam_id
string
(query)
steam_id
steam_ids
array[string]
(query)
ban_ids
array[number]
(query)
ban_group_uuid
string
(query)
ban_group_uuid
for_server_id
number
(query)
for_server_id
search
string
(query)
search
by_client_ids
array[number]
(query)
include_total
boolean
(query)

--
page *
number
(query)
Page to show (starts with 0)

page
Responses
Code	Description	Links
200	
Media type

application/json
Controls Accept header.
Example Value
Schema
{
  "results": [
    {
      "player": {
        "project_id": 0,
        "server_id": 0,
        "ip": "string",
        "ip_details": {
          "country_code": "string",
          "country_name": "string",
          "city": "string",
          "provider": "string",
          "proxy": true
        },
        "team": [
          "string"
        ],
        "player_team": {
          "server_id": 0,
          "teammates": [
            "string"
          ],
          "created_at": 0
        },
        "status": "offline",
        "last_no_license": true,
        "created_at": 0,
        "last_online_at": 0,
        "last_language": "string",
        "active_check_id": 0,
        "last_check_id": 0,
        "last_check_time": 0,
        "ignore_reports_until": 0,
        "steam": {
          "avatar_update_time": 0,
          "profile_private": true,
          "profile_hours": 0,
          "profile_update_time": 0,
          "profile_next_update_time": 0
        },
        "steam_data": {
          "avatar_hash": "string",
          "profile_filled": true,
          "avatar_small_url": "string",
          "avatar_medium_url": "string",
          "avatar_full_url": "string",
          "visible": true,
          "signed_at": 0,
          "ban_data": {},
          "hours_total": 0,
          "hours_2week": 0,
          "rust_hours_total": 0,
          "rust_hours_2week": 0,
          "spacewar_hours_total": 0,
          "spacewar_hours_2week": 0,
          "hours_closed_at": 0,
          "created_at": 0,
          "updated_at": 0
        },
        "steam_id": "string",
        "steam_name": "string",
        "steam_avatar": "string"
      },
      "id": 0,
      "project_id": 0,
      "client_id": 0,
      "ban_group_uuid": "string",
      "steam_id": "string",
      "server_ids": [
        0
      ],
      "reason": "string",
      "comment": "string",
      "proofs": [
        "string"
      ],
      "ban_ip": "string",
      "ban_ip_active": true,
      "expired_at": 0,
      "edit_client_id": 0,
      "edit_time": 0,
      "unban_client_id": 0,
      "unban_time": 0,
      "created_at": 0,
      "computed_is_active": true,
      "sync_project_id": 0,
      "sync_should_kick": true,
      "send_notification": true
    }
  ],
  "page": 0,
  "limit": 0
}
No links

POST
/public/bans
Ban players (all bans per request will be groupped)

Rate limits: 3 request per 1 second

Parameters
Try it out
No parameters

Request body

application/json
Example Value
Schema
{
  "bans": [
    {
      "steam_id": "string",
      "ban_ip": "string",
      "ban_ip_active": true,
      "server_ids": [
        0
      ],
      "reason": "string",
      "comment": "string",
      "proofs": [
        "string"
      ],
      "expired_at": 0,
      "destroy_buildings": false
    }
  ]
}
Responses
Code	Description	Links
201	

POST
/public/unban
Unban players

Rate limits: 3 request per 1 second

Parameters
Try it out
Name	Description
target_steam_id *
string
(query)
target_steam_id
Responses
Code	Description	Links
201	
No links

