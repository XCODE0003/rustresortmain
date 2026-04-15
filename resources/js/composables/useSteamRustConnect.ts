/** AppID Rust в Steam (как в `steam://run/252490//+connect …`). */
export const RUST_STEAM_APP_ID = 252490;

/**
 * Ссылка для кнопки «Подключиться»: запуск Rust и connect к серверу.
 * @param address IP:порт или hostname:порт (как в `server.options.ip`)
 */
export function steamRustConnectUrl(address: string): string {
    const trimmed = address.trim();
    if (!trimmed) {
        return '';
    }

    return `steam://run/${RUST_STEAM_APP_ID}//+connect%20${encodeURIComponent(trimmed)}`;
}
