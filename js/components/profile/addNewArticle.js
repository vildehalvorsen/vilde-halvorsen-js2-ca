import displayMessage from "../common/displayMessage.js";
import { getToken } from "../../utils/storage.js";
import { articlesUrl } from "../../settings/api.js";

export async function addNewArticle(title, author, summary) {
    const data = JSON.stringify({
        title: title,
        author: author,
        summary: summary
    });

    const token = getToken();

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    };

    try {
        const form = document.querySelector("#add");

        const response = await fetch(articlesUrl, options);
        const json = await response.json();
        console.log(json.created_at);

        if (json.created_at) {
            displayMessage("success", `You added: ${title}`, ".message-container");
            form.reset();
        }
    } catch (error) {
        console.log(error);
        displayMessage("error", "OPS! Something went wrong.. Please try again.", ".message-container");
    }
}