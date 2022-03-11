import { createArticles } from "./createArticles.js";

export function searchArticles(articles) {
    const searchInput = document.querySelector("#searchInput");

    searchInput.onkeyup = function() {
        const searchValue = event.target.value.trim().toLowerCase();

        const filteredArticles = articles.filter(article => {
            if (article.title.toLowerCase().includes(searchValue)) {
                return true;
            }
        });

        createArticles(filteredArticles);
    }
}