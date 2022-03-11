import displayMessage from "../components/common/displayMessage.js";
import { articlesUrl } from "../settings/api.js";
import { createArticles } from "./createArticles.js";
import { searchArticles } from "./searchArticles.js";


export async function displayArticles() {
    const articlesContainer = document.querySelector(".articles-container");

    try {
        const response = await fetch(articlesUrl);
        const articles = await response.json();
        console.log(articles);

        createArticles(articles);
        searchArticles(articles);

    } catch (error) {
        console.log(error);
        articlesContainer.innerHTML = "";
        displayMessage("error", "No.. Something happened trying to fetch the API", ".message-container");
    }
}