
export type Location = {
    id: string;
    name: string;
    lat:string;
    lon:string;
}

// Định nghĩa các đơn vị đo lường (Units)
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
}

// Dữ liệu thời tiết hiện tại
export type CurrentWeather = {
  time: string;
  interval: number;
  temperature_2m: number;
  relative_humidity_2m: number;
  apparent_temperature: number;
  precipitation: number;
  wind_speed_10m: number;
  weather_code: number;
}

// Dữ liệu dự báo theo giờ
export type HourlyWeather = {
  time: string[];
  temperature_2m: number[];
  weather_code: number[];
}

// Dữ liệu dự báo theo ngày
export type DailyWeather = {
  time: string[];
  weather_code: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
}

// type tổng kết hợp tất cả
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
}