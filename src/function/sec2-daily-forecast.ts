import type { DailyWeather } from "./typeAPI";
import { weatherStatus } from "./weather_status.js";



export const dailyWeather = (data_DailyWeather: DailyWeather) => {
    const sectionDailyWeather = document.querySelector(".sec2-daily") as HTMLElement;
    
    const weekdays = data_DailyWeather.time.map((time) => {
        const date = new Date(time);
        return date.toLocaleDateString("en-US", { weekday: "long" });
    });

    sectionDailyWeather.innerHTML = ``;

    
    

}