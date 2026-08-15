function convert() {
    let temp = document.getElementById("temp").value;
    let unit = document.getElementById("unit").value;
    if (temp == "") {
        document.getElementById("error").innerHTML =
            "Please enter temperature";
        return;
    }
    if (unit == "") {
        document.getElementById("error").innerHTML =
            "Please select a unit";
        return;
    }
    temp = Number(temp);
    let celsius;
    let fahrenheit;
    let kelvin;
    if (unit == "C") {
        celsius = temp;
        fahrenheit = (temp * 9 / 5) + 32;
        kelvin = temp + 273.15;
    }
    else if (unit == "F") {
        fahrenheit = temp;
        celsius = (temp - 32) * 5 / 9;
        kelvin = celsius + 273.15;

    }
    else {
        kelvin = temp;
        celsius = temp - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;

    }
    if (celsius < -273.15) {
        document.getElementById("error").innerHTML =
            "Temperature cannot be below absolute zero";
        return;
    }
    document.getElementById("error").innerHTML = "";
    document.getElementById("celsius").innerHTML =
        celsius.toFixed(2) + " °C";
    document.getElementById("fahrenheit").innerHTML =
        fahrenheit.toFixed(2) + " °F";
    document.getElementById("kelvin").innerHTML =
        kelvin.toFixed(2) + " K";
}