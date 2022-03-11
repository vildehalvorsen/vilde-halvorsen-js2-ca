import createMenu from "./components/common/createMenu.js";
import { getUser } from "./utils/storage.js";

createMenu();

const username = getUser();

const profileContainer = document.querySelector(".profile-container");
const headingTitle = document.querySelector("h1");

if (username) {
    headingTitle.innerHTML = `Hi ${username}`;
}