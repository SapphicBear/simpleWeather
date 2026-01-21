import "./style.css";
import { getData } from "./data.js";
import { cacheDOM } from "./DOM.js";
import { render } from "./render.js";
import { format } from "date-fns";
import { TZDate } from "@date-fns/tz";


let DOM = cacheDOM();
function convertUnit() {
    let initial = getData.getTemp();
    let unit;
    if (initial === "uk") {
        unit = "°C";
    } else {
        unit = "°F";
    }
    return unit;
}
function getTime(data) {
    let currentTime = new Date()
    let currentTimeZoned = format(new TZDate(currentTime, `${data.timezone}`), "HH:mm");
    return currentTimeZoned;
}


DOM.searchButton.addEventListener("click", () => {
    render.clearDOM(DOM);
    getData.dataHandler(DOM)
        .then((data) => {
            render.samplePrint(data, DOM, convertUnit(), getTime(data));
            render.handleBackground(data, DOM);
        }).catch((error) => {
            render.printError(error, DOM);
            render.handleBackground(error, DOM);
        })
});
DOM.unitSelector.addEventListener("click", () => {
    DOM.unitSelector.classList.toggle("inactive")
    DOM.unitSelector.classList.toggle("active");
})


