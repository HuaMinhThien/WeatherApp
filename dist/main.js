import { saveToFavourites } from "./function/addToFavourite.js";
import { getToaDo, getWeather } from "./function/get_API.js";
import { renderFavourite } from "./function/sec-favourite.js";
import { currentWeather } from "./function/sec1-today-Weather.js";
import { dailyWeather } from "./function/sec2-daily-forecast.js";
import { hourlyWeather } from "./function/sec3-hourly-forecast.js";
import { selectWeekdays } from "./function/select-weekdays.js";
import {} from "./function/typeAPI.js";
const inputSearch = document.getElementById("search");
const btnSearch = document.getElementById("btn-search");
let res_location_cache = null;
let res_getWeather_cache = null;
btnSearch?.addEventListener("click", async function () {
    const value = inputSearch.value.trim().toLocaleLowerCase();
    const location = value.replaceAll(" ", "+");
    // API data
    const res_location = await getToaDo(location);
    if (!res_location) {
        alert("Location not found. Please try again.");
        return;
    }
    const res_getWeather = await getWeather(res_location.lat, res_location.lon);
    res_location_cache = res_location;
    res_getWeather_cache = res_getWeather;
    currentWeather(res_location.name || 'Unknown Location', res_getWeather.current);
    dailyWeather(res_getWeather.daily);
    hourlyWeather(0, res_getWeather.hourly);
    selectWeekdays(res_getWeather.daily);
    const btnSelectDay = document.querySelectorAll(".day");
    btnSelectDay.forEach((li, index) => {
        li.addEventListener("click", () => {
            hourlyWeather(index, res_getWeather_cache.hourly);
        });
    });
    const btnAddFavourite = document.getElementById("btn-add-favourite");
    btnAddFavourite.addEventListener("click", () => {
        saveToFavourites(res_location_cache.name, res_location_cache.lat, res_location_cache.lon);
        renderFavourite();
    });
});
const btnShowFavourite = document.getElementById("btn-show-favourite");
btnShowFavourite?.addEventListener("click", () => {
    renderFavourite();
});
//# sourceMappingURL=main.js.map