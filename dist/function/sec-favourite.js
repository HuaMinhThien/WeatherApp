export const renderFavourite = () => {
    const sectionFavourite = document.querySelector("#sec-favourite");
    const getData = localStorage.getItem("favorite-locations");
    const favoriteLocations = JSON.parse(getData) || [];
    if (sectionFavourite) {
        sectionFavourite.className = "favourite-location";
        if (favoriteLocations.length === 0) {
            sectionFavourite.innerHTML = `<p style="font-size: 12px; color: #888; padding: 10px;">No favorites</p>`;
            return;
        }
        sectionFavourite.innerHTML = favoriteLocations.map((loc, index) => `
            <div class="fav-item" style="position: relative; display: inline-block;">
                <button class="btn-location">${loc.name}</button>
                <button class="btn-delete" data-index="${index}">×</button>
            </div>
        `).join('');
        const deleteButtons = sectionFavourite.querySelectorAll(".btn-delete");
        deleteButtons.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                const indexStr = e.currentTarget.getAttribute("data-index");
                const index = parseInt(indexStr || "0");
                const currentData = JSON.parse(localStorage.getItem("favorite-locations") || "[]");
                currentData.splice(index, 1);
                localStorage.setItem("favorite-locations", JSON.stringify(currentData));
                renderFavourite();
            });
        });
        const locationButtons = sectionFavourite.querySelectorAll(".btn-location");
        locationButtons.forEach((btn, index) => {
            btn.addEventListener("click", () => {
                const loc = favoriteLocations[index];
                console.log("Tìm lại địa điểm:", loc.name);
            });
        });
    }
};
//# sourceMappingURL=sec-favourite.js.map