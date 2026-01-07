import "./style.css";
import { getData } from "./data.js";
import { cacheDOM } from "./DOM.js";
import { render } from "./render.js";
import { format } from "date-fns";
import { TZDate } from "@date-fns/tz";

console.log("Javascript connected from Index.js");

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
    getData.dataHandler()
        .then((data) => {
            console.log(data)
            render.samplePrint(data, DOM, convertUnit(), getTime(data));
            render.handleBackground(data, DOM);
        }).catch((error) => {
            console.log(error);
            render.printError(error, DOM);
            render.handleBackground(error, DOM);
        })
});
DOM.unitSelector.addEventListener("click", () => {
    DOM.unitSelector.classList.toggle("inactive")
    DOM.unitSelector.classList.toggle("active");
})


