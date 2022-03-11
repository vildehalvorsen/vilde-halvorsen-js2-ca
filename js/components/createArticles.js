import { favKey, getFromStorage, getUser } from "../utils/storage.js";
import { heartButton } from "./favourites/heartButton.js";
import { editLink } from "./favourites/editFunctions.js";

const favourites = getFromStorage(favKey);

export function createArticles(articles) {
    const articlesContainer = document.querySelector(".articles-container");
    articlesContainer.innerHTML = "";

    if (articles.length === 0) {
        articlesContainer.innerHTML = `<p>There are no articles here..</p>`;
    }

    articles.forEach(article => {
        let toggleClass = "fa-regular";

        // check through each item in favs array
        // does the article.id exist in the favs array?
        const doesFavExists = favourites.find(fav => {
            return parseInt(fav.id) === article.id;
        });

        // if it is in the array, change the style of the heart to be solid.
        if (doesFavExists) {
            toggleClass = "fa-solid";
        }

        articlesContainer.innerHTML += `<li class="article">
                                            <div class="article__title">
                                                <h3>${article.title}</h3>
                                                <i class="${toggleClass} fa-heart" data-id="${article.id}" data-title="${article.title}" data-author="${article.author}" data-summary="${article.summary}"></i>
                                            </div>
                                            <h4>Author: ${article.author}</h4>
                                            <p>${article.summary}</p>
                                            <a class="edit" href="/edit.html?id=${article.id}">edit</a>
                                        </li>`;
    });

    heartButton();
    editLink();

}