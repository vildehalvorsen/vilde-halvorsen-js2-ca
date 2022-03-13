import createMenu from "./components/common/createMenu.js";
import { submitArticleForm } from "./components/profile/submitArticleForm.js";
import { getUser, getToken } from "./utils/storage.js";
import { doLogOut } from "./components/profile/dologOut.js";

const username = getUser();
const token = getToken();

if (!username || !token) {
    location.href = "/";
}

createMenu();

const logOutBtn = document.querySelector("#logOutBtn");
logOutBtn.addEventListener("click", doLogOut);

const form = document.querySelector("#add");
form.addEventListener("submit", submitArticleForm);

const headingTitle = document.querySelector("h1");

if (username) {
    headingTitle.innerHTML = `Hi ${username}`;
}