import type { DailyWeather } from "./typeAPI";


export const selectWeekdays = (data_dailyWeather: DailyWeather) => {
    const  element_dropDays = document.querySelector(".drop-day") as HTMLSelectElement;

    const weekdays = data_dailyWeather.time.map((time) => {
        const date = new Date(time);
        return date.toLocaleDateString("en-US", { weekday: "long" });
    });

    element_dropDays.innerHTML =  `
        <summary class="select-day">
            ${weekdays[0]}
            <img
            src="assets/images/icon-dropdown.svg"
            alt=""
            style="height: 10px"
            />
        </summary>
        <ul class="sec3-select-day">
            ${weekdays.map((day) => `<li class="day">${day}</li>`).join('')}      
        </ul>
    `

    return element_dropDays;
};





