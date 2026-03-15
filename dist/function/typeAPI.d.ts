export type Location = {
    id: string;
    name: string;
    lat: string;
    lon: string;
};
export type WeatherUnits = {
    time: string;
    interval?: string;
    temperature_2m: string;
    relative_humidity_2m?: string;
    apparent_temperature?: string;
    precipitation?: string;
    wind_speed_10m?: string;
    weather_code: string;
    temperature_2m_max?: string;
    temperature_2m_min?: string;
};
export type CurrentWeather = {
    time: string;
    interval: number;
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    precipitation: number;
    wind_speed_10m: number;
    weather_code: number;
};
export type HourlyWeather = {
    time: string[];
    temperature_2m: number[];
    weather_code: number[];
};
export type DailyWeather = {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
};
export type WeatherResponse = {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    current_units: WeatherUnits;
    current: CurrentWeather;
    hourly_units: Partial<WeatherUnits>;
    hourly: HourlyWeather;
    daily_units: Partial<WeatherUnits>;
    daily: DailyWeather;
};
//# sourceMappingURL=typeAPI.d.ts.map