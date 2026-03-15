import { getToaDo, getWeather } from "./function/get_API.js";
import { currentWeather } from "./function/sec1-today-Weather.js";
import { dailyWeather } from "./function/sec2-daily-forecast.js";
import { type Location, type WeatherResponse } from "./function/typeAPI.js";


const inputSearch = document.getElementById("search") as HTMLInputElement;
const btnSearch = document.getElementById("btn-search") as HTMLButtonElement;

btnSearch?.addEventListener("click",async function(){

    const value:string = inputSearch.value.trim().toLocaleLowerCase();
    const location = value.replaceAll(" ", "+");
    
    // API data
    const res_toaDo:Location = await getToaDo(location);
    if (!res_toaDo) {
        alert("Location not found. Please try again.");
        return;
    }
    const res_getWeather:WeatherResponse = await getWeather(res_toaDo.lat, res_toaDo.lon);
    

    currentWeather(res_toaDo.name || 'Unknown Location', res_getWeather.current);
    dailyWeather(res_getWeather.daily);
    
})




