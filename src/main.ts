import { getToaDo, getWeather } from "./function/get_API.js";
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
            console.log("da click");
                
            hourlyWeather(index, res_getWeather_cache!.hourly);
        });
    });
    
});



