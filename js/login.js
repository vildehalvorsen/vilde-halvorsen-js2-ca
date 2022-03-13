import createMenu from "./components/common/createMenu.js";
import { submitLogin } from "./components/login/submitLogin.js"

createMenu();

const form = document.querySelector("#login-form");
form.addEventListener("submit", submitLogin);