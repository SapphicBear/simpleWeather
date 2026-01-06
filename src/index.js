import "./style.css";
import { getData } from "./data.js";
import { cacheDOM } from "./DOM.js";
import { render } from "./render.js";

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

DOM.searchButton.addEventListener("click", () => {
    getData.dataHandler()
        .then((data) => {
            console.log(data)
            render.samplePrint(data, DOM, convertUnit());
            render.handleBackground(data, DOM);
        }).catch((error) => {
            console.log(error);
            render.printError(error, DOM);
        })
});
DOM.unitSelector.addEventListener("click", () => {
    DOM.unitSelector.classList.toggle("inactive")
    DOM.unitSelector.classList.toggle("active");
})


