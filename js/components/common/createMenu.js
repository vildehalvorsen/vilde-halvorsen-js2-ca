import { getUser } from "../../utils/storage.js";

export default function createMenu() {

    const { pathname } = document.location;

    const username = getUser();

    let userLink = `<a href="/login.html" class="${pathname === "/login.html" ? "active" : ""}">Log in</a>`;

    if (username) {
        userLink = `<a href="/profile.html" class="${pathname === "/profile.html"  || pathname === "/edit.html" ? "active" : ""}"><i class="fa-solid fa-circle-user"></i> ${username}</a>`;
    }

    const menuContainer = document.querySelector(".menu");
    menuContainer.innerHTML = `<ul>
                                  <li>
                                      <a href="/" class="${pathname === "/" || pathname === "/index.html" ? "active" : ""}">Home</a>
                                  </li>

                                  <li>
                                      <a href="/favourites.html" class="${pathname === "/favourites.html" ? "active" : ""}">Favourites</a>
                                  </li>

                                  <li>
                                  ${userLink}
                                  </li>
                              </ul>`
}