document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "ebed5d322amsh9b5c33276070b54p18efdfjsn0af8531fbedb"; // Replace with your actual API key
    const getWeatherButton = document.getElementById("getWeather");
    const weatherInfo = document.getElementById("weatherInfo");

    getWeatherButton.addEventListener("click", function () {
        const cityInput = document.getElementById("city").value;
        if (cityInput.trim() !== "") {
            fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json${cityInput}&appid=${ebed5d322amsh9b5c33276070b54p18efdfjsn0af8531fbedb
        }&units=metric`)
                .then(response => response.json())
                .then(data => {
                    const temperature = data.main.temp;
                    const description = data.weather[0].description;
                    const cityName = data.name;
                    const country = data.sys.country;

                    weatherInfo.innerHTML = `
                        <h2>Weather in ${cityName}, ${country}</h2>
                        <p>Temperature: ${temperature}°C</p>
                        <p>Description: ${description}</p>
                    `;
                })
                .catch(error => {
                    console.error("Error fetching weather data:", error);
                    weatherInfo.innerHTML = "<p>Weather data not available.</p>";
                });
        }
    });
});
