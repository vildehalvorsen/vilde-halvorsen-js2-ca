import { favKey, getFromStorage } from "../utils/storage.js";
import { heartButton } from "./favourites/heartButton.js";
import { displayEditLink } from "./editFunctions.js";

const favourites = getFromStorage(favKey);

export function createArticles(articles) {
    const articlesContainer = document.querySelector(".articles-container");
    articlesContainer.innerHTML = "";

    if (articles.length === 0) {
        articlesContainer.innerHTML = `<p>There are no articles here..</p>`;
    }

    articles.forEach(article => {
        let toggleClass = "fa-regular";

        const doesFavExists = favourites.find(fav => {
            return parseInt(fav.id) === article.id;
        });

        if (doesFavExists) {
            toggleClass = "fa-solid";
        }

        articlesContainer.innerHTML += `<li class="article">
                                            <div>
                                                <div class="article__title">
                                                    <h3>${article.title}</h3>
                                                    <i class="${toggleClass} fa-heart" data-id="${article.id}" data-title="${article.title}" data-author="${article.author}" data-summary="${article.summary}"></i>
                                                </div>
                                                <h4>Author: ${article.author}</h4>
                                                <p>${article.summary}</p>
                                            </div>
                                            <div>
                                                <a class="edit" href="/edit.html?id=${article.id}">edit</a>
                                            </div>
                                        </li>`;
    });

    heartButton();
    displayEditLink();
}