import displayMessage from "../common/displayMessage.js";
import { articlesUrl } from "../../settings/api.js";
import { getToken } from "../../utils/storage.js";
import { updateFavStorage } from "./editStorageFunctions.js";


export async function updateArticle(id, title, author, summary) {
    const url = articlesUrl + id;
    const data = JSON.stringify({
        title: title,
        author: author,
        summary: summary
    });

    const token = getToken();

    const options = {
        method: "PUT",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);

        if (json.updated_at) {
            updateFavStorage(id, title, author, summary);
            displayMessage("success", "Successfully updated", ".message-container");
        }

    } catch (error) {
        console.log(error);
        displayMessage("error", "OPS! Something went wrong.. Please try again.", ".message-container");
    }
}