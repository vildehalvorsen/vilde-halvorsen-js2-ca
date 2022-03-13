import { getUser } from "../utils/storage.js";

const username = getUser();

export function displayEditLink() {
    if (username) {
        const editLink = document.querySelectorAll(".edit");

        editLink.forEach(function(item) {
            item.style.display = "block";
        })
    }
}

export function createAddNewBtn() {
    if (username) {
        const addNewBtn = document.querySelector("#addNewBtn");

        addNewBtn.style.display = "block";
        addNewBtn.onclick = function() {
            location.href = "/profile.html"
        }
    }
}