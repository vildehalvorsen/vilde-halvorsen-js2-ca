export const favKey = "favourites";
export const userKey = "user";
export const tokenKey = "token";

export function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getFromStorage(key) {
    const currentList = localStorage.getItem(key);

    if (!currentList) {
        return [];
    }

    return JSON.parse(currentList);
}

export function clearStorageItem(key) {
    localStorage.removeItem(key);
};

/* Log in functions*/

export function saveToken(token) {
    saveToStorage(tokenKey, token);
};

export function getToken() {
    return getFromStorage(tokenKey);
}

export function saveUser(user) {
    saveToStorage(userKey, user);
}

export function getUser() {
    const user = getFromStorage(userKey);

    if (user) {
        return user.username;
    }

    return null;
}