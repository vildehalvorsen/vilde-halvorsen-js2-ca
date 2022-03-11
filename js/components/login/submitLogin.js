import displayMessage from "../common/displayMessage.js";
import { validateEmail, checkLength } from "./validateInputs.js";
import { doLogin } from "./doLogin.js";


export function submitLogin(event) {
    event.preventDefault();

    const usernameInput = document.querySelector("#username");
    const passwordInput = document.querySelector("#password");
    const usernameError = document.querySelector("#usernameError");
    const passwordError = document.querySelector("#passwordError");

    const messageContainer = document.querySelector(".message-container");
    messageContainer.innerHTML = "";

    const usernameValue = usernameInput.value.trim();
    const passwordValue = passwordInput.value.trim();


    if (validateEmail(usernameValue)) {
        usernameError.style.display = "none";
    } else {
        usernameError.style.display = "block";
    }


    if (checkLength(passwordValue, 5)) {
        passwordError.style.display = "none";
    } else {
        passwordError.style.display = "block";
    }


    if (usernameValue.length === 0 || passwordValue.length === 0) {
        return displayMessage("warning", "Please fill in username and password", ".message-container");
    }

    doLogin(usernameValue, passwordValue);

}


// async function logIn(username, password) {
//     const url = apiUrl + "auth/local"
//     const data = JSON.stringify({
//         identifier: username,
//         password: password
//     })

//     const options = {
//         method: "POST",
//         body: data,
//         headers: {
//             "Content-Type": "application/json"
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//         const json = await response.json();
//         console.log(json);

//         if (json.user) {
//             saveToken(json.jwt);
//             saveUser(json.user);

//             location.href = "/";
//         }
//         if (json.error) {
//             displayMessage("error", "Invalid username or password", ".message-container")
//         }

//     } catch (error) {
//         console.log(error);
//     }
// }