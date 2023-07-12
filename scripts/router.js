document.addEventListener("click", (e) => {
    const { target } = e;
    if (!target.matches("nav a")) {
        return;
    }
    e.preventDefault();
    route();
});

const routes = {
    404: {
        template: "/templates/404.html",
        title: "404",
        description: "Page not found",
    },
    "/": {
        template: "/templates/index.html",
        title: "Home",
        description: "This is the home page",
    },
    "/about": {
        template: "/templates/about.html",
        title: "About Us",
        description: "This is the about page",
    },
    "/projects": {
        template: "/templates/projects.html",
        description: "This is the Projects page"
    },
    "/contact": {
        template: "/templates/contact.html",
        title: "Contact Us",
        description: "This is the contact page",
    },
};

const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    locationHandler();
};

const locationHandler = async () => {
    const location = window.location.pathname;

    if (location.length == 0) {
        location = "/";
    }
    const route = routes[location] || routes["404"];

    const html = await fetch(route.template).then((response) => response.text());

    document.getElementById("content").innerHTML = html;

    document.title = route.title;

    document
        .querySelector('meta[name="description"]')
        .setAttribute("content", route.description);
};


window.onpopstate = locationHandler;

window.route = route;

locationHandler();