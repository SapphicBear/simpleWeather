function changeTemp(temp, unit) {
    if (isNaN(temp)) {
        throw new Error("Temperature must be a number!");
    }
    let result;
    switch (unit) {
        case "C":
            result = ((parseInt(temp) - 32) * 5) / 9;
            break;
        case "F":
            result = (parseInt(temp) * 9) / 5 + 32;
            break;
        default:
            throw new Error("Unit not valid");
    }
    return result.toFixed(1) + "°" + unit;
}

export { changeTemp };
