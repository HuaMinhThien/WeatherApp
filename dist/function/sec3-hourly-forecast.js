import { weatherStatus } from "./weather_status.js";
export const hourlyWeather = (dayOffset, hourly) => {
    const sectionHourlyWeather = document.querySelector(".sec3-hourly");
    const now = new Date();
    const currentHourStr = `T${String(now.getHours()).padStart(2, '0')}:00`;
    const dayStart = dayOffset * 24;
    const dayEnd = dayStart + 24;
    const dayTimes = hourly.time.slice(dayStart, dayEnd);
    const relativeIndex = dayTimes.findIndex(t => t.includes(currentHourStr));
    const finalStartIndex = dayStart + (relativeIndex !== -1 ? relativeIndex : 0);
    const selectedTimes = hourly.time.slice(finalStartIndex, finalStartIndex + 8);
    const selectedTemps = hourly.temperature_2m.slice(finalStartIndex, finalStartIndex + 8);
    const selectedCodes = hourly.weather_code.slice(finalStartIndex, finalStartIndex + 8);
    let html = ``;
    selectedTimes.forEach((time, i) => {
        const hour = new Date(time).getHours();
        html += `
            <div class="sec3-hourly-box">
            <div>
              <img src="${weatherStatus(selectedCodes[i] ?? 0)}" alt="" />
              <p>${dayOffset === 0 && i === 0 ? "Now" : hour + ":00"}</p>
            </div>

            <p>${Math.round(selectedTemps[i] ?? 0)}°</p>
          </div>`;
    });
    sectionHourlyWeather.innerHTML = html;
};
//# sourceMappingURL=sec3-hourly-forecast.js.map