import { getUser } from "../../utils/storage.js";

const username = getUser();

export function editLink() {
    if (username) {
        const editLink = document.querySelectorAll(".edit");

        editLink.forEach(function(item) {
            item.style.display = "block";
        })
    }
}