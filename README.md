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
- 🔒 Secure API key handling via GitHub Secrets

## Setup Instructions

### Prerequisites
- OpenWeatherMap API key ([Get one free](https://openweathermap.org/api))

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/danishsyed-dev/Weather-scraper.git
   cd Weather-scraper
   ```

2. **Configure your API key for local development**
   
   Create a file called `js/config.local.js` with your API key:
   ```javascript
   const CONFIG = {
       OPENWEATHER_API_KEY: 'your_actual_api_key_here'
   };
   ```
   
   > **Note:** `config.local.js` is gitignored and won't be pushed to GitHub.

3. **Open in browser**
   
   Simply open `index.html` in your browser, or use Live Server in VS Code.

### Deployment (GitHub Pages)

This project uses **GitHub Actions** to securely deploy with the API key stored in GitHub Secrets.

1. **Add your API key to GitHub Secrets**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Secrets and variables** → **Actions**
   - Click **New repository secret**
   - Name: `OPENWEATHER_API_KEY`
   - Value: Your OpenWeatherMap API key
   - Click **Add secret**

2. **Enable GitHub Pages**
   - Go to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

3. **Push to deploy**
   - Every push to `main` will trigger the deployment workflow
   - The workflow automatically injects your API key from GitHub Secrets

## Project Structure

```
Weather-scraper/
├── index.html              # Main HTML page
├── css/
│   └── style.css           # Stylesheet
├── js/
│   ├── script.js           # Frontend logic
│   ├── config.js           # Placeholder config (for deployment)
│   ├── config.local.js     # Your local API key (gitignored)
│   └── config.example.js   # Config template reference
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment workflow
└── README.md
```

## Security

- **Local development:** Uses `config.local.js` which is gitignored
- **Production:** API key is stored in GitHub Secrets and injected during deployment
- **Source code:** Only contains a placeholder, never the real API key

## Author

**Syed Danish Ali**  
GitHub: [@danishsyed-dev](https://github.com/danishsyed-dev)

## License

This project is open source and available under the [MIT License](LICENSE).
