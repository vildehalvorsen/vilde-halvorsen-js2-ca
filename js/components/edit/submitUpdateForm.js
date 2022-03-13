import displayMessage from "../common/displayMessage.js";
import { updateArticle } from "./updateArticle.js";


export function submitUpdateForm(event) {
    event.preventDefault();

    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const summary = document.querySelector("#summary");
    const idInfo = document.querySelector("#id");
    const messageContainer = document.querySelector(".message-container");

    messageContainer.innerHTML = "";

    const titleValue = title.value.trim();
    const authorValue = author.value.trim();
    const summaryValue = summary.value.trim();
    const idInfoValue = idInfo.value;

    if (titleValue.length === 0 || authorValue.length === 0 || summaryValue === 0) {
        return displayMessage("warning", "All fields are required", ".message-container")
    }
    if (titleValue.length < 2) {
        return displayMessage("warning", "Title must be more than 2 characters", ".message-container")
    }
    if (authorValue.length < 3) {
        return displayMessage("warning", "Author must be more than 3 characters", ".message-container")
    }
    if (summaryValue.length < 10) {
        return displayMessage("warning", "Summary must be more than 10 characters", ".message-container")
    }

    document.title = `${titleValue}`;

    updateArticle(idInfoValue, titleValue, authorValue, summaryValue);
}