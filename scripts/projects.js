const projects = document.getElementById("projects");
const content = document.getElementById("content");
const output = document.getElementById("output");


const projectMessage = "<h1>My Work</h1><br>"

const allProjects = ["Guess The Number", "The Keep", "React Chat Room", "Capstone"]

// projects
const guessTheNumber = (
    "<div class='project'>" +
    "<h2>Guess the Number</h2>" +
    "<img src='assets/projects/guess-the-number.png' width='600' alt='guess the number'>" +
    "<ul>" + 
    "<li><p>A 0-100 guessing game that pits the computer against the player or vice versa </p></li><br>" +
    "<li><p>Made with JavaScript and the Node.js runtime</p></li><br>" +
    "<li><p>Strengthed my understanding of asyncrhonous functions</p></li><br>" + 
    "</ul>" +
    "<p>check the code out on GitHub:</p>" +
    "<a href='https://github.com/burlingtoncodeacademy-students/guess-the-number-cyrusf94.git'>GitHub/GTN</a>" +
    "</div>"
)

const theKeep = (
    "<div class='project'>" +
    "<h2>The Keep</h2>" +
    "<img src='assets/projects/the-keep.png' width='450' alt='the keep'>" +
    "<ul>" + 
    "<li><p>A terminal based adventure inspired by Zork</p></li><br>" +
    "<li><p>Made with JavaScript and the Node.js runtime</p></li><br>" +
    "<li><p>Further understanding of asychronous functions and js Classes</p></li><br>" + 
    "</ul>" +
    "<p>check the code out on GitHub:</p>" +
    "<a href='https://github.com/burlingtoncodeacademy-students/zorkington-cyrusf94.git'>GitHub/The-Keep/Zorkington</a>" +
    "</div>"
)

const reactChatRoom = (
    "<div class='project'>" +
    "<h2>React Chat Room</h2>" +
    "<img src='assets/projects/react-chatroom.png' width='450' alt='chat room'>" +
    "<ul>" + 
    "<li><p>A full-stack chat room application</p></li><br>" +
    "<li><p>Made with Express.js, MongoDB/Mongoose ODM and React</p></li><br>" +
    "<li><p>Built the backend and all REST API end points using Express.js</p></li><br>" +
    "<li><p>The client side site was built using the React framework</p></li><br>" +  
    "</ul>" +
    "<p>check the code out on GitHub:</p>" +
    "<a href='https://github.com/burlingtoncodeacademy-students/react-chat-austin-cyrus.git'>GitHub/React-Chatroom</a>" +
    "</div>"
)

const capstone = (
    "<div class='project'>" +
    "<h2>Capstone</h2>" +
    "<img src='https://w7.pngwing.com/pngs/914/758/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png' width='400' alt='capstone'>" +
    "<ul>" + 
    "<li><p>Coming Soon!</p></li><br>" +
    "<li><p></p></li><br>" +
    "<li><p></p></li><br>" +
    "<li><p></p></li><br>" +  
    "</ul>" +
    "<p>check the code out on GitHub:</p>" +
    "<a href='https://github.com/cyrusf94'>GitHub/Cyrus</a>" +
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
        case project === "Guess The Number" :
            content.innerHTML = guessTheNumber;
            break;
        case project === "The Keep" :
            content.innerHTML = theKeep;
            break;
        case project === "React Chat Room" :
            content.innerHTML = reactChatRoom;
            break;
        case project === "Capstone" :
            content.innerHTML = capstone;
            break;
        default : null;
    }
}