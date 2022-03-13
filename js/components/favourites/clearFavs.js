import { clearStorageItem, favKey } from "../../utils/storage.js";
import { createFavList } from "./createFavList.js";

export function clearFavs() {
    const confirmClear = confirm("Are you sure you want to clear your favs list?");

    if (confirmClear) {
        clearStorageItem(favKey);
        createFavList();
    }
}