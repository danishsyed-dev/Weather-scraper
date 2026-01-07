# Weather Scraper 🌦️

A clean, responsive weather application that fetches real-time weather data using the OpenWeatherMap API.

![Weather App](https://images.pexels.com/photos/2771744/pexels-photo-2771744.jpeg)

## 🌐 Live Demo
[https://syeddanishali.me/Weather-scraper](https://syeddanishali.me/Weather-scraper)

## Features

- 🔍 Search weather by city name
- 🌡️ Display temperature, humidity, and pressure
- 📱 Fully responsive design
- ⚡ Fast and lightweight

## Setup Instructions

### Prerequisites
- OpenWeatherMap API key ([Get one free](https://openweathermap.org/api))

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/danishsyed-dev/Weather-scraper.git
   cd Weather-scraper
   ```

2. **Configure your API key**
   ```bash
   cp js/config.example.js js/config.js
   ```
   
   Edit `js/config.js` and add your API key:
   ```javascript
   const CONFIG = {
       OPENWEATHER_API_KEY: 'your_actual_api_key_here'
   };
   ```

3. **Open in browser**
   
   Simply open `index.html` in your browser, or use Live Server in VS Code.

## Project Structure

```
Weather-scraper/
├── index.html              # Main HTML page
├── css/
│   └── style.css           # Stylesheet
├── js/
│   ├── script.js           # Frontend logic
│   ├── config.example.js   # Config template
│   └── config.js           # Your API key (gitignored)
└── README.md
```

## Security Note

The `config.js` file containing your API key is gitignored and won't be pushed to GitHub. Anyone cloning this repo will need to create their own `config.js` with their own API key.

## Author

**Syed Danish Ali**  
GitHub: [@danishsyed-dev](https://github.com/danishsyed-dev)

## License

This project is open source and available under the [MIT License](LICENSE).
