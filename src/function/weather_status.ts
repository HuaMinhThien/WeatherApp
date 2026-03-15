export const weatherStatus = (weatherCode:number): string => {
    switch (weatherCode) {
        case 0:
            return "assets/images/icon-sunny.webp";
        case 1:
        case 2:
            return "assets/images/icon-partly-cloudy.webp";
        case 3:
            return "assets/images/icon-overcast.webp";
        case 45:
        case 48:
            return "assets/images/icon-fog.webp";
        case 51:
        case 53:
        case 55:
             return "assets/images/icon-drizzle.webp";
        case 61:
        case 63:
        case 65:
        case 80:
        case 81:
            return "assets/images/icon-rain.webp";
        case 71:
        case 73:
        case 75:
        case 77:
        case 85:
        case 86:
            return "assets/images/icon-snow.webp";
        case 95:
        case 96:
        case 99:
            return "assets/images/icon-storm.webp";

        default:
            return "assets/images/icon-sunny.webp";
    }
}