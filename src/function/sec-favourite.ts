import { getWeather } from "./get_API.js";
import { currentWeather } from "./sec1-today-Weather.js";
import { dailyWeather } from "./sec2-daily-forecast.js";
import { hourlyWeather } from "./sec3-hourly-forecast.js";
import { selectWeekdays } from "./select-weekdays.js";

export const renderFavourite = () => {
    const sectionFavourite = document.querySelector("#sec-favourite") as HTMLElement;
    const getData = localStorage.getItem("favorite-locations");
    const favoriteLocations = JSON.parse(getData as string) || [];
    
    if (sectionFavourite) {
        sectionFavourite.className = "favourite-location";

        if (favoriteLocations.length === 0) {
            sectionFavourite.innerHTML = `<p style="font-size: 12px; color: #888; padding: 10px;">No favorites</p>`;
            return;
        }

        sectionFavourite.innerHTML = favoriteLocations.map((loc: any, index: number) => `
            <div class="fav-item" style="position: relative; display: inline-block;">
                <button class="btn-location">${loc.name}</button>
                <button class="btn-delete" data-index="${index}">×</button>
            </div>
        `).join('');

        const deleteButtons = sectionFavourite.querySelectorAll(".btn-delete");
        deleteButtons.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                const index = parseInt(btn.getAttribute("data-index") || "0");
                const currentData = JSON.parse(localStorage.getItem("favorite-locations") || "[]");
                currentData.splice(index, 1);
                localStorage.setItem("favorite-locations", JSON.stringify(currentData));
                renderFavourite();
            });
        });

        const locationButtons = sectionFavourite.querySelectorAll(".btn-location");
        locationButtons.forEach((btn, index) => {
            btn.addEventListener("click", async () => { 
                const loc = favoriteLocations[index]; 
                
                const res_getWeather = await getWeather(loc.lat, loc.lon);
                
                if (res_getWeather) {
                    currentWeather(loc.name, res_getWeather.current);
                    dailyWeather(res_getWeather.daily);
                    hourlyWeather(0, res_getWeather.hourly);
                    selectWeekdays(res_getWeather.daily);
                    
                }

                const btnSelectDay = document.querySelectorAll(".day") as NodeListOf<HTMLLIElement>;
                btnSelectDay.forEach((li, index) => {
                    li.addEventListener("click",() => {                  
                        hourlyWeather(index, res_getWeather!.hourly);
                    });
                });
                
            });
        });
    }
}