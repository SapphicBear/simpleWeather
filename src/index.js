import "./style.css";
console.log("Javascript connected from Index.js");

let temperatureUnit = "unitGroup=uk";

const userInput = () => {
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
            samplePrint(data);
        }).catch((error) => {
            console.log(error);
            samplePrint(error);
        })
    
    
});

function dataHandler() {
    const value = userInput();
    const formatedInput = formatInput(value);
    const finalURL = handleURL(formatedInput);
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
    try {
        const response = await fetch(address);
            if (!response.ok) {
                if (response.status == 400) {
                    throw new Error(`Bad request: Status: ${response.status}`);
                } 
            } else {
                const weatherData = await response.json();
                return weatherData;
            }
    } catch (error) {
        throw new Error(error.message);
    }
    
}

function samplePrint(data) {
    let [header, body, footer] = document.querySelectorAll(`.information > div > p[class*="text"]`);
        header.textContent = `Location: ${data.resolvedAddress}`;
        body.textContent = `Current conditions: ${data.description}`
        footer.textContent = `Timezone: ${data.timezone}`;
}