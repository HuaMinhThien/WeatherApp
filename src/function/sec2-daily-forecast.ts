import type { DailyWeather } from "./typeAPI";
import { weatherStatus } from "./weather_status.js";



export const dailyWeather = (data_DailyWeather: DailyWeather) => {
    const sectionDailyWeather = document.querySelector(".sec2-daily") as HTMLElement;
    
    const weekdays = data_DailyWeather.time.map((time) => {
        const date = new Date(time);
        return date.toLocaleDateString("en-US", { weekday: "short" });
    });

    let html = ``;

    weekdays.forEach((weekday, index) => {
        html += `
        <div class="sec2-daily-box">
            <p>${weekday}</p>
            <img src="${weatherStatus(data_DailyWeather.weather_code[index] ?? 0)}" alt="" />
            <div class="sec2-daily-box-temperature">
              <p>${Math.round(data_DailyWeather.temperature_2m_max[index] ?? 0)}°</p>
              <p>${Math.round(data_DailyWeather.temperature_2m_min[index] ?? 0)}°</p>
            </div>
          </div>
          `;
    });

    
    return sectionDailyWeather.innerHTML = html;
}

