
function changeContent() {
    const targetElement = document.getElementById("main-text");
    targetElement.textContent = "New content";
}

const myButton = document.getElementById("header-button-1");
myButton.addEventListener("click", changeContent);