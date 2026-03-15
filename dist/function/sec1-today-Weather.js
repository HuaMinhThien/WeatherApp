import { weatherStatus } from "./weather_status.js";
export const currentWeather = (namelocation, dataCurrentWeather) => {
    let sectionCurrentWeather = document.querySelector(".sec1-today-Weather");
    const date = new Date(dataCurrentWeather.time);
    const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
    const dayMonth = date.toLocaleDateString("en-US", { day: "numeric", month: "long" });
    const year = date.getFullYear();
    sectionCurrentWeather.innerHTML = `
        
        <div class="sec1-main-box">
          <div class="sec1-m-left">
            <h3>${namelocation}</h3>
            <p>${weekday}, ${dayMonth}, ${year}</p>
          </div>
          <div class="sec1-m-right">
            <img src="${weatherStatus(dataCurrentWeather.weather_code)}" alt="" />
            <p>${dataCurrentWeather.temperature_2m}°</p>
          </div>
        </div>

        <div class="sec1-parameter">
          <div class="sec1-param-box" id="feelsLike">
            <p class="title-param">Feels Like</p>
            <p class="current-param">${dataCurrentWeather.apparent_temperature}°</p>
          </div>
          <div class="sec1-param-box" id="humidty">
            <p class="title-param">Humidty</p>
            <p class="current-param">${dataCurrentWeather.relative_humidity_2m}%</p>
          </div>
          <div class="sec1-param-box" id="wind">
            <p class="title-param">Wind</p>
            <p class="current-param">${dataCurrentWeather.wind_speed_10m} km/h</p>
          </div>
          <div class="sec1-param-box" id="precipitation">
            <p class="title-param">Precipitation</p>
            <p class="current-param">${dataCurrentWeather.precipitation} mm</p>
          </div>
        </div>
      
    `;
    return sectionCurrentWeather;
};
//# sourceMappingURL=sec1-today-Weather.js.map