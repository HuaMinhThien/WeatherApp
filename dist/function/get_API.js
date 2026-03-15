export const getToaDo = async (location) => {
    try {
        const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${location}&format=jsonv2`);
        const data = await res.json();
        if (data && data.length > 0) {
            return data[0];
        }
        return null;
    }
    catch (error) {
        console.error("Error fetching location data:", error);
        return null;
    }
};
export const getWeather = async (lat, lon) => {
    try {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m,weather_code&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Asia%2FBangkok`);
        const data = await res.json();
        return data;
    }
    catch (error) {
        console.error("Error fetching weather data:", error);
        return null;
    }
};
//# sourceMappingURL=get_API.js.map