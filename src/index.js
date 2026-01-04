import "./style.css";

console.log("Javascript connected from Index.js");
let temperatureUnit = "unitGroup=uk";
let userInput = () => {
    let value = document.getElementById("search-bar").value;
    if (value.length <= 0) {
        value = "";
    }
    return value;
};
const searchButton = document.querySelector(".search-button");

searchButton.addEventListener("click", () => {
    dataHandler()
        .then((data) => {
            console.log(data)
            samplePrint(data.description);
        }).catch((error) => {
            console.log(error)
            samplePrint(error)
        })
    
    
});

function dataHandler() {
    let value = userInput();
    let formatedInput = formatInput(value);
    let finalURL = handleURL(formatedInput);
    const weatherData = getWeatherData(finalURL);
    return weatherData;
    
}
function formatInput(input) {
    const final = input.replaceAll(/\s+/g, "%20");
    return final;
}

function handleURL(input) {
    let location = input;
    let address = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?${temperatureUnit}&key=GKAVBU9ZAHUA9UV25ESASX8UT&contentType=json`;
    return address;
}


async function getWeatherData(address) {
        const weatherData = await fetch(address)
            .then((response) => {
                return response;
            }).catch((error) => {
                throw new Error("Error fetching data from server!");
            })
        const data = await weatherData.json()
            .then((data) => {
                return data;
            }).catch(() => {
                throw new Error("Something went wrong!")
            })
        return data;
}

function samplePrint(data) {
    document.querySelector(".information-body > p").textContent = data;
}