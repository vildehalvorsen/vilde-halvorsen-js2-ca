import { toggleFavourites } from "./toggleFavourites.js";

export function heartButton() {
    const hearts = document.querySelectorAll(".article i");

    hearts.forEach((heart) => {
        heart.addEventListener("click", toggleFavourites);
    });
}