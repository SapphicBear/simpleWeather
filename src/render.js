export const render = {
    samplePrint(data, DOM, unit, time) {
        DOM.header.classList.remove("error");
        DOM.header.textContent = `Location: ${data.resolvedAddress}`;
        DOM.headerShort.textContent = `${data.currentConditions.conditions}`;
        DOM.bodyTemp.textContent = `Temp: ${data.currentConditions.temp}${unit} / Feels like: ${data.currentConditions.feelslike}${unit}`;
        DOM.bodyCurrentCon.textContent = `Current conditions: ${data.description}`;
        DOM.footerTime.textContent = `Time: ${time}`;
        DOM.footerTimeZone.textContent = `Timezone: ${data.timezone}`;
    },
    printError(err, DOM) {
        DOM.header.classList.add("error");
        DOM.header.textContent = err;
        DOM.headerShort.textContent = "";
        DOM.bodyTemp.textContent = "";
        DOM.bodyCurrentCon.textContent = "";
        DOM.footerTime.textContent = "";
        DOM.footerTimeZone.textContent = "";
    },
    handleBackground(data, DOM) {
        try {
            const time = data.currentConditions.datetime;
            if (time > "18:00:00" || time < "06:00:00") {
            DOM.body.className = "night";
            
            } else if (time < "18:00:00" || time > "06:00:00") {
                DOM.body.className = "day";
            } 
        } catch {
            DOM.body.className = "";
        }   
    },
    clearDOM(DOM) {
        DOM.header.textContent = "";
        DOM.headerShort.textContent = "";
        DOM.bodyTemp.textContent = "";
        DOM.bodyCurrentCon.textContent = "";
        DOM.footerTime.textContent = "";
        DOM.footerTimeZone.textContent = "";
    }
};