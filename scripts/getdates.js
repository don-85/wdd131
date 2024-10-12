// Only run if the element exists
let yearElement = document.getElementById("currentYear");
if (yearElement) {
    yearElement.innerHTML = `&copy; ${new Date().getFullYear()}`;
}

let lastModifiedElement = document.getElementById("lastModified");
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;
}

// Example for event listener without redeclaration
const hambutton = document.querySelector("#hambutton");
if (hambutton) {
    hambutton.addEventListener("click", () => {
        // Your click handler code here
    });
}

