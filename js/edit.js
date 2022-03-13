import createMenu from "./components/common/createMenu.js";
import deleteButton from "./components/edit/deleteButton.js";
import { articlesUrl } from "./settings/api.js";
import { getToken, getUser } from "./utils/storage.js";
import { submitUpdateForm } from "./components/edit/submitUpdateForm.js";

const username = getUser();
const token = getToken();

if (!username || !token) {
    location.href = "/";
}

createMenu();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
    document.location.href = "/";
}

const articleUrl = articlesUrl + id;

const form = document.querySelector("#edit");
form.addEventListener("submit", submitUpdateForm);

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const summary = document.querySelector("#summary");
const idInfo = document.querySelector("#id");

(async function fetchArticleDetails() {
    try {
        const response = await fetch(articleUrl);
        const details = await response.json();
        console.log(details)

        document.title = `${details.title}`;

        title.value = details.title;
        author.value = details.author;
        summary.value = details.summary;
        idInfo.value = details.id;

        deleteButton(details.id);

    } catch (error) {
        console.log(error);
    }
})()