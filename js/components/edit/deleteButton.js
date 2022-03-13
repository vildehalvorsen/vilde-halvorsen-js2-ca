import displayMessage from "../common/displayMessage.js";
import { articlesUrl } from "../../settings/api.js";
import { getToken } from "../../utils/storage.js";
import { deleteFavFromStorage } from "./editStorageFunctions.js";

export default function deleteButton(id) {
    const container = document.querySelector(".deleteBtn-container");
    container.innerHTML = `<button type="button" id="deleteBtn">Delete</button>`;

    const button = document.querySelector("#deleteBtn");

    button.onclick = async function() {
        console.log(id);

        const doDelete = confirm("Are you sure?");
        if (doDelete) {
            const url = articlesUrl + id;

            const token = getToken();

            const options = {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            try {
                const response = await fetch(url, options);
                const json = await response.json();
                console.log(json);

                deleteFavFromStorage(id);

                location.href = "/";

            } catch (error) {
                console.log(error);
                displayMessage("error", "OPS! Something happened.. Please try again.");
            }
        }
    }
}