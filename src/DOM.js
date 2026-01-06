export function cacheDOM() {
    const DOM = 
    [ 
    document.querySelector(".search-button"),
    document.querySelectorAll(`.information > div > p[class*="text"]`),
    document.querySelector(`input[type="checkbox"]`),
    document.querySelector("body"),
    ];
    let [searchButton, [header, headerShort, bodyTemp, bodyCurrentCon, footerTime, footerTimeZone], unitSelector, body] = DOM;

    return {searchButton, header, headerShort, bodyTemp, bodyCurrentCon, footerTime, footerTimeZone, unitSelector, body};
}