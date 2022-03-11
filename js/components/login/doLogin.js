import displayMessage from "../common/displayMessage.js";
import { apiUrl } from "../../settings/api.js";
import { saveToken, saveUser } from "../../utils/storage.js";

export async function doLogin(username, password) {
    const url = apiUrl + "auth/local";
    const data = JSON.stringify({
        identifier: username,
        password: password
    })

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json"
        }
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);

        if (json.user) {
            saveToken(json.jwt);
            saveUser(json.user);

            location.href = "/";
        }
        if (json.error) {
            displayMessage("error", "Invalid username or password", ".message-container")
        }

    } catch (error) {
        console.log(error);
    }
}