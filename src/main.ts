import { saveToFavourites } from "./function/addToFavourite.js";
import { getToaDo, getWeather } from "./function/get_API.js";
import { renderFavourite } from "./function/sec-favourite.js";
import { currentWeather } from "./function/sec1-today-Weather.js";
import { dailyWeather } from "./function/sec2-daily-forecast.js";
import { hourlyWeather } from "./function/sec3-hourly-forecast.js";
import { selectWeekdays } from "./function/select-weekdays.js";
import { type Location, type WeatherResponse } from "./function/typeAPI.js";


const inputSearch = document.getElementById("search") as HTMLInputElement;
const btnSearch = document.getElementById("btn-search") as HTMLButtonElement;


let res_location_cache:Location | null = null;
let res_getWeather_cache:WeatherResponse | null = null;

btnSearch?.addEventListener("click",async function(){

    const value:string = inputSearch.value.trim().toLocaleLowerCase();
    const location = value.replaceAll(" ", "+");
    
    // API data
    const res_location:Location = await getToaDo(location);
    if (!res_location) {
        alert("Location not found. Please try again.");
        return;
    }
    const res_getWeather:WeatherResponse = await getWeather(res_location.lat, res_location.lon);    
    
    res_location_cache = res_location;
    res_getWeather_cache = res_getWeather;

    currentWeather(res_location.name || 'Unknown Location', res_getWeather.current);
    dailyWeather(res_getWeather.daily);
    hourlyWeather(0, res_getWeather.hourly);
    selectWeekdays(res_getWeather.daily);


    const btnSelectDay = document.querySelectorAll(".day") as NodeListOf<HTMLLIElement>;
    btnSelectDay.forEach((li, index) => {
        li.addEventListener("click",() => {                  
            hourlyWeather(index, res_getWeather_cache!.hourly);
        });
    });
    
    const btnAddFavourite = document.getElementById("btn-add-favourite") as HTMLButtonElement;
    btnAddFavourite.addEventListener("click", () => {
        saveToFavourites(res_location_cache!.name, res_location_cache!.lat, res_location_cache!.lon);
        renderFavourite();
    });

});

const btnShowFavourite = document.getElementById("btn-show-favourite") as HTMLButtonElement;
btnShowFavourite?.addEventListener("click", () => {
    renderFavourite(); 
});


document.addEventListener("click", (e) => {
    const target = e.target as Node;

    const settings = document.querySelector(".settings-dropdown") as HTMLDetailsElement;
    if (settings && !settings.contains(target)) {
        settings.open = false;
    }

    const dropDay = document.querySelector(".drop-day") as HTMLDetailsElement;
    if (dropDay && !dropDay.contains(target)) {
        dropDay.open = false;
    }
});