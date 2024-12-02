// Replace this with your actual OpenWeatherMap API key
const apiKey = 'bbafb2e1aa688f1cf44e58f11db98f20'; 
document.getElementById("submit-btn").addEventListener("click", function() {
    const city = document.getElementById("city").value;
    if (city) {
        fetchWeather(city);
    }
});
function fetchWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                // Update the HTML with weather data
                document.getElementById("city-name").textContent = `City: ${data.name}, ${data.sys.country}`;
                document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
                document.getElementById("description").textContent = `Description: ${data.weather[0].description}`;
            } else {
                // Handle the case if no data is returned (invalid city)
                document.getElementById("city-name").textContent = "City not found!";
                document.getElementById("temperature").textContent = "";
                document.getElementById("description").textContent = "";
            }
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
            alert("There was an error fetching the weather data. Please try again.");
        });
}
