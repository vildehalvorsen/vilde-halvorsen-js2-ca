import { clearStorageItem, userKey, tokenKey } from "../../utils/storage.js";

export function doLogOut() {
    const confirmLogOut = confirm("Are you sure you want to log out?");

    if (confirmLogOut) {
        clearStorageItem(userKey);
        clearStorageItem(tokenKey);

        location.href = "/";
    }
}