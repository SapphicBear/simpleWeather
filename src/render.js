import { format } from "date-fns";
import { TZDate } from "@date-fns/tz";
export const render = {
    samplePrint(data, DOM, unit) {
        let currentTime = new Date()
        let currentTimeZoned = format(new TZDate(currentTime, `${data.timezone}`), "HH:mm");
        DOM.header.classList.remove("error");
        DOM.header.textContent = `Location: ${data.resolvedAddress}`;
        DOM.headerShort.textContent = `${data.currentConditions.conditions}`;
        DOM.bodyTemp.textContent = `Temp: ${data.currentConditions.temp}${unit} / Feels like: ${data.currentConditions.feelslike}${unit}`;
        DOM.bodyCurrentCon.textContent = `Current conditions: ${data.description}`;
        DOM.footerTime.textContent = `Time: ${currentTimeZoned}`;
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
        const time = data.currentConditions.datetime;
        if (time > "18:00:00") {
            DOM.body.className = "night";
            
        } else if (time < "18:00:00") {
            DOM.body.className = "day";
            
        } 
    }
};