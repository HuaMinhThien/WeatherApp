export const saveToFavourites = (nameLocation: string, lat: string, lon: string) => {
    // 1. Lấy dữ liệu và đảm bảo nó luôn là một mảng
    const getData = localStorage.getItem("favorite-locations");
    let favouriteLocations: any[] = [];
    
    try {
        const parsedData = JSON.parse(getData as string);
        favouriteLocations = Array.isArray(parsedData) ? parsedData : [];
    } catch (e) {
        favouriteLocations = [];
    }

    const favorite = {
        name: nameLocation,
        lat: lat,
        lon: lon
    };

    const kiemTra = favouriteLocations.some((loc) => loc.name === nameLocation);
    if (kiemTra) {
        alert(`Location "${nameLocation}" is already in favorites!`);
        return;
    }

    favouriteLocations.push(favorite);
    localStorage.setItem("favorite-locations", JSON.stringify(favouriteLocations));
    
    alert(`Location "${nameLocation}" has been added to favorites!`);
}