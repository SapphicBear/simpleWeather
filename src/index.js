import "./style.css";
import * as models from "./models/combine.js";
import { format } from "date-fns";
import { TZDate } from "@date-fns/tz";

let DOM = models.cacheDOM();
function convertUnit() {
    let initial = models.getData.getTemp();
    let unit;
    if (initial === "uk") {
        unit = "°C";
    } else {
        unit = "°F";
    }
    return unit;
}
function getTime(data) {
    let currentTime = new Date();
    let currentTimeZoned = format(
        new TZDate(currentTime, `${data.timezone}`),
        "HH:mm",
    );
    return currentTimeZoned;
}

DOM.searchButton.addEventListener("click", () => {
    models.render.clearDOM(DOM);
    models.getData
        .dataHandler(DOM)
        .then((data) => {
            models.render.samplePrint(data, DOM, convertUnit(), getTime(data));
            models.render.handleBackground(data, DOM);
        })
        .catch((error) => {
            models.render.printError(error, DOM);
            models.render.handleBackground(error, DOM);
        });
});
DOM.unitSelector.addEventListener("click", () => {
    DOM.unitSelector.classList.toggle("inactive");
    DOM.unitSelector.classList.toggle("active");
});
