import { favKey, getFromStorage, clearStorage } from "../../utils/storage.js";



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
                              <div class="article__title">
                                <h3>${favourite.title}</h3>
                                <i class="fa-solid fa-heart"></i>
                              </div>
                              <h4>Author: ${favourite.author}</h4>
                              <p>${favourite.summary}</p>
                            </li>`;
    });

    clearBtn.addEventListener("click", clearFavs);
}


function clearFavs() {
    const confirmClear = confirm("Are you sure you want to clear your favs list?");

    if (confirmClear) {
        clearStorage(favKey);
        createFavList();
    }
}