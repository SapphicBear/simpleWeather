export const getData = {
    userInput() {
        let value = document.getElementById("search-bar").value;
        if (value.length <= 0) {
            value = "";
            }
        return value;
},
    getTemp() {
        const unitButton = document.getElementById("unit-choice");
        let units = ["uk", "us"];
        let unit;
        if (unitButton.classList.contains("active")) {
            unit = units[1];
        } else {
            unit = units[0];
        }
        return unit;
    },
    
    dataHandler() {
        const value = this.userInput();
        const unit = this.getTemp();
        const formatedInput = this.formatInput(value);
        const finalURL = this.handleURL(formatedInput, unit);
        const weatherData = this.getWeatherData(finalURL);
        return weatherData;
    },
    formatInput(input) {
        const final = input.replaceAll(/\s+/g, "%20");
        return final;
    },

    handleURL(input, temp) {
        let location = input;
        let temperatureUnit = temp;
        let address = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${temperatureUnit}&key=GKAVBU9ZAHUA9UV25ESASX8UT&contentType=json`;
        return address;
    },

    async getWeatherData(address) {
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
    },
}
