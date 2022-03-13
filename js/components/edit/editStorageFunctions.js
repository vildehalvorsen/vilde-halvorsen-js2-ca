import { getFromStorage, saveToStorage, favKey } from "../../utils/storage.js";


export function updateFavStorage(id, title, author, summary) {
    const currentList = getFromStorage(favKey);

    const newList = currentList.map(function(fav) {
        if (fav.id === id) {
            return {...fav, title: title, author: author, summary: summary };
        }
        return fav;
    });

    saveToStorage(favKey, newList);
}

export function deleteFavFromStorage(id) {
    const favList = getFromStorage(favKey);

    const favExists = favList.find(fav => fav.id === JSON.stringify(id));

    if (favExists) {
        const newFavs = favList.filter(fav => fav.id !== JSON.stringify(id));
        saveToStorage(favKey, newFavs);
    }
}