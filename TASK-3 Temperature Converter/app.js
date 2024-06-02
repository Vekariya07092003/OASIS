const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
  degree.value = "";
  celsiusField.innerHTML = "";
  convertBtn.setAttribute("disabled", "");
});

degree.addEventListener("input", () => {
  if (degree.value.trim() !== "" && !isNaN(degree.value)) {
    convertBtn.removeAttribute("disabled");
  } else {
    convertBtn.setAttribute("disabled", "");
  }
});

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertToCelsius();
  convertBtn.innerHTML = "<span class='icon'><i class='fa fa-spinner fa-spin'></i> Converting...</span>";
  setTimeout(() => {
    convertBtn.innerHTML = "<span>Convert</span>";
  }, 1000);
});

function convertToCelsius() {
  let inputValue = parseFloat(degree.value);

  if (isNaN(inputValue)) {
    celsiusField.innerHTML = "Invalid input";
    return;
  }

  setTimeout(() => {
    let result;
    if (tempType.value === "celsius") {
      const celsiusToFahrenheit = (inputValue * 9/5) + 32;
      const celsiusToKelvin = inputValue + 273.15;
      result = `Fahrenheit: ${celsiusToFahrenheit.toFixed(3)} &deg;F<br>Kelvin: ${celsiusToKelvin.toFixed(3)} K`;
    } else if (tempType.value === "fahrenheit") {
      const fahrenheitToCelsius = (inputValue - 32) * (5 / 9);
      const fahrenheitToKelvin = fahrenheitToCelsius + 273.15;
      result = `Celsius: ${fahrenheitToCelsius.toFixed(3)} &deg;C<br>Kelvin: ${fahrenheitToKelvin.toFixed(3)} K`;
    } else if (tempType.value === "kelvin") {
      const kelvinToCelsius = inputValue - 273.15;
      const kelvinToFahrenheit = (kelvinToCelsius * 9/5) + 32;
      result = `Celsius: ${kelvinToCelsius.toFixed(3)} &deg;C<br>Fahrenheit: ${kelvinToFahrenheit.toFixed(3)} &deg;F`;
    } else {
      result = "Select a valid temperature type";
    }
    celsiusField.innerHTML = result;
  }, 1200)
}
