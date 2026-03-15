import type { HourlyWeather } from "./typeAPI";
import { weatherStatus } from "./weather_status.js";


export const hourlyWeather = (dayOffset: number, hourly: HourlyWeather) => {
    const sectionHourlyWeather = document.querySelector(".sec3-hourly") as HTMLElement;
    
    // 1. Lấy giờ hiện tại và định dạng thành chuỗi giống API (ví dụ: "T14:00")
    const now = new Date();
    const currentHourStr = `T${String(now.getHours()).padStart(2, '0')}:00`;

    // 2. Xác định phạm vi của ngày được chọn (mỗi ngày có 24 tiếng)
    const dayStart = dayOffset * 24;
    const dayEnd = dayStart + 24;
    const dayTimes = hourly.time.slice(dayStart, dayEnd);

    // 3. Tìm xem trong 24 tiếng của ngày đó, tiếng nào khớp với "Giờ hiện tại"
    const relativeIndex = dayTimes.findIndex(t => t.includes(currentHourStr));

    // 4. Tính toán startIndex thực tế trong mảng 168 phần tử
    const finalStartIndex = dayStart + (relativeIndex !== -1 ? relativeIndex : 0);

    // 5. Cắt 8 tiếng và render
    const selectedTimes = hourly.time.slice(finalStartIndex, finalStartIndex + 8);
    const selectedTemps = hourly.temperature_2m.slice(finalStartIndex, finalStartIndex + 8);
    const selectedCodes = hourly.weather_code.slice(finalStartIndex, finalStartIndex + 8);

    // Render HTML (vòng lặp forEach như cũ...)
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
}