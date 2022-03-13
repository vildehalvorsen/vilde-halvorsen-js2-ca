import { favKey, getFromStorage } from "../../utils/storage.js";
import { displayEditLink } from "../editFunctions.js";
import { clearFavs } from "./clearFavs.js";


export function createFavList() {
    const favourites = getFromStorage(favKey);
    const favContainer = document.querySelector(".articles-container");
    const clearBtn = document.querySelector("#clearBtn");

    if (favourites.length === 0) {
        clearBtn.style.display = "none";
        favContainer.innerHTML = `<p>There are no favourites here :'( </p>`;
    }

    favourites.forEach(favourite => {
        favContainer.innerHTML += `<li class="article">
                                        <div>
                                            <div class="article__title">
                                                <h3>${favourite.title}</h3>
                                                <i class="fa-solid fa-heart" data-id="${favourite.id}"></i>
                                            </div>
                                            <h4>Author: ${favourite.author}</h4>
                                            <p>${favourite.summary}</p>
                                        </div>
                                    </li>`;
    });

    displayEditLink();
    clearBtn.addEventListener("click", clearFavs);
}