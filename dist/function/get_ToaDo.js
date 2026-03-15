export const getToaDo = async (location) => {
    const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${location}&format=jsonv2`);
    const data = await res.json();
    if (data && data.length > 0) {
        return data[0];
    }
    return null;
};
//# sourceMappingURL=get_ToaDo.js.map