const home = document.getElementById("home")
const about = document.getElementById("about")
const projects = document.getElementById("projects")
const contact = document.getElementById("contact")

function onRouteChanged() {

    const hash = window.location.hash;

    switch (hash) {
        case "#home":
            home.click();
            break;
        case "#about":
            about.click()
            break;
        case "#projects":
            projects.click()
            break;
        case "#contact":
            contact.click()
            break;

        default:
            break;
    }
}

window.addEventListener("hashchange", onRouteChanged);