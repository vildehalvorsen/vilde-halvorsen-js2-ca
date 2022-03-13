import { favKey, saveToStorage, getFromStorage } from "../../utils/storage.js";

export function toggleFavourites() {
    this.classList.toggle("fa-regular");
    this.classList.toggle("fa-solid");

    const id = this.dataset.id;
    const title = this.dataset.title;
    const author = this.dataset.author;
    const summary = this.dataset.summary;

    const currentFavs = getFromStorage(favKey);

    const favExists = currentFavs.find(fav => fav.id === id);

    if (!favExists) {
        const article = { id: id, title: title, author: author, summary: summary };
        currentFavs.push(article);
        saveToStorage(favKey, currentFavs);
    } else {
        const newFavs = currentFavs.filter(fav => fav.id !== id);
        saveToStorage(favKey, newFavs);
    }
}