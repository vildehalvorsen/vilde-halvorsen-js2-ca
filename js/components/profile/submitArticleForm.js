import displayMessage from "../common/displayMessage.js";
import { addNewArticle } from "./addNewArticle.js";

export function submitArticleForm(event) {
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const summary = document.querySelector("#summary");
    const messageContainer = document.querySelector(".message-container");

    event.preventDefault();

    messageContainer.innerHTML = "";

    const titleValue = title.value.trim();
    const authorValue = author.value.trim();
    const summaryValue = summary.value.trim();

    if (titleValue.length === 0 || authorValue.length === 0 || summaryValue.length === 0) {
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

    addNewArticle(titleValue, authorValue, summaryValue);
}