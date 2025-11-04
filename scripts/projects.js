const projects = document.getElementById("projects");
const content = document.getElementById("content");
const output = document.getElementById("output");


const projectMessage = "<h1>My Work</h1><br>"

const allProjects = ["Gamer Guild"]

// projects

const gamerGuild = (
    "<div class='project'>" +
    "<h2>Gamer Guild</h2>" +
    "<img src='/assets/projects/gamer-guild.png' width='400' alt='Gamer Guild'>" +
    "<ul>" + 
    "<li><p>A forum application acting as a hub for gamers</p></li><br>" +
    "<li><p>Built with the MERN stack</p></li><br>" +
    "<li><p>Ability to link steam account through openID</p></li><br>" +
    "<li><p>Utilizes access to the Steam API for player summary data</p></li><br>" +   
    "<li><p>Authentication using JWT web tokens</p></li><br>" +
    "<li><p></p></li><br>" +
    "</ul>" +
    "<p>check the code out on GitHub:</p>" +
    "<a href='https://github.com/awyrocki/Gamer-Guild.git'>GitHub/Gamer-Guild</a>" +
    "</div>"
)


projects.addEventListener("click", e => {
    output.innerHTML = "";
    content.innerHTML = "";
    content.innerHTML = projectMessage
    let projectList = document.createElement("div")
    projectList.id = "project-list"
    content.appendChild(projectList);
    allProjects.forEach(p => {
        let proLink = document.createElement('a');
        proLink.innerHTML = p;
        proLink.id = "project-link"
        let pName = p.replace(/ /g, "-");
        proLink.href = `#${pName}`
        projectList.appendChild(proLink)
        proLink.addEventListener("click", e => {
            console.log(e.target.innerHTML)
            render(e.target.innerHTML);
        })
    })
})

function render(project) {
    switch(true) {
        case project === "The Keep" :
            content.innerHTML = theKeep;
            break;
        case project === "React Chat Room" :
            content.innerHTML = reactChatRoom;
            break;
        case project === "Gamer Guild" :
            content.innerHTML = gamerGuild;
            break;
        default : null;
    }
}