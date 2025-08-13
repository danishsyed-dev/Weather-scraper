document.addEventListener('DOMContentLoaded', function() {
    const weatherForm = document.getElementById('weatherForm');
    const cityInput = document.getElementById('city');
    const searchList = document.getElementById('searchList');
    const weatherInfo = document.getElementById('weatherInfo');

    weatherForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const city = cityInput.value;
        getWeather(city);
    });
/*
    cityInput.addEventListener('input', function() {
        fetchSearchList(this.value);
    });
*/
    function getWeather(city) {
        const apiKey = 'eb36c7ecb36249e7f47bda47a51defa2'; // Your OpenWeatherMap API key
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                weatherInfo.innerHTML = '';
                if (data.cod && data.cod !== 200) {
                    weatherInfo.innerHTML = `<div class='alert alert-danger'>${data.message || 'City not found.'}</div>`;
                } else {
                    const main = data.main;
                    const weather = data.weather[0];
                    const temperatureCelsius = main.temp;
                    const weatherHtml = `
                        <h2>Weather in ${data.name}</h2>
                        <p><strong>Temperature:</strong> ${Math.round(temperatureCelsius)} °C</p>
                        <p><strong>Pressure:</strong> ${main.pressure} hPa</p>
                        <p><strong>Humidity:</strong> ${main.humidity}%</p>
                        <p><strong>Description:</strong> ${weather.description}</p>
                    `;
                    weatherInfo.innerHTML = weatherHtml;
                }
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                weatherInfo.innerHTML = `<div class='alert alert-danger'>An error occurred while fetching weather data.</div>`;
            });
    }

    function fetchSearchList(query) {
        if (query.length < 1) {
            searchList.style.display = "none";
            return;
        }

        $.ajax({
            url: `https://api.teleport.org/api/cities/?search=${query}`,
            method: "GET",
            success: function(data) {
                let list = "";
                if (data._embedded && data._embedded["city:search-results"]) {
                    data._embedded["city:search-results"]
                        .sort((a, b) => a.matching_full_name.localeCompare(b.matching_full_name))
                        .forEach(city => {
                            if (city.matching_full_name.toLowerCase().startsWith(query.toLowerCase())) {
                                list += `<div class="search-item" onclick="selectSearchItem('${city.matching_full_name}')">${city.matching_full_name}</div>`;
                            }
                        });
                }
                searchList.innerHTML = list;
                searchList.style.display = "block";
            }
        });
    }
});

function selectSearchItem(value) {
    document.getElementById("city").value = value;
    document.getElementById("searchList").style.display = "none";
    document.getElementById('weatherForm').dispatchEvent(new Event('submit'));
}
