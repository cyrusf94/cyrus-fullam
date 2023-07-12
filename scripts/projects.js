const projects = document.getElementById("projects");
const content = document.getElementById("content");
const output = document.getElementById("output");


const projectMessage = "<h1>My Work</h1><br>"

const allProjects = ["Guess The Number", "The Keep", "React Chat Room", "Capstone"]

// projects
const guessTheNumber = (
    "<div class='project'>" +
    "<h2>Guess the Number</h2>" +
    "<img src='./assets/projects/guess-the-number.png' width='600' alt='guess the number'>" +
    "<ul>" + 
    "<li><p>A 0-100 guessing game that pits the computer against the player or vice versa </p></li>" +
    "<li><p>Made with JavaScript and the Node.js runtime</p></li>" +
    "<li><p>Strengthed my understanding of asyncrhonous functions</p></li>" + 
    "</ul>" +
    "<p>check the code out on GitHub:</p>" +
    "<a href='https://github.com/burlingtoncodeacademy-students/guess-the-number-cyrusf94.git'>GitHub/GTN</a>" +
    "</div>"
)

const theKeep = (
    "<div class='project'>" +
    "<h2>The Keep</h2>" +
    "<img src='./assets/projects/the-keep.png' width='450' alt='the keep'>" +
    "<ul>" + 
    "<li><p>A terminal based adventure inspired by Zork</p></li>" +
    "<li><p>Made with JavaScript and the Node.js runtime</p></li>" +
    "<li><p>Further understanding of asychronous functions and js Classes</p></li>" + 
    "</ul>" +
    "<p>check the code out on GitHub:</p>" +
    "<a href='https://github.com/burlingtoncodeacademy-students/zorkington-cyrusf94.git'>GitHub/The-Keep/Zorkington</a>" +
    "</div>"
)

const reactChatRoom = (
    "<div class='project'>" +
    "<h2>React Chat Room</h2>" +
    "<img src='./assets/projects/react-chatroom.png' width='450' alt='chat room'>" +
    "<ul>" + 
    "<li><p>A full-stack chat room application made with React</p></li>" +
    "<li><p>Made with Express.js, MongoDB/Mongoose ODM and React</p></li>" +
    "<li><p>Built the backend and all REST API end points using Express.js</p></li>" +
    "<li><p>The client side site was built using the React framework</p></li>" +  
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
    "<li><p>Coming Soon!</p></li>" +
    "<li><p></p></li>" +
    "<li><p></p></li>" +
    "<li><p></p></li>" +  
    "</ul>" +
    "<a href='https://github.com/cyrusf94'>GitHub/Cyrus</a>" +
    "</div>"
)

// rendered project list
const projectList = (
    "<div id='project-list'>" +
    guessTheNumber +
    theKeep +
    reactChatRoom +
    capstone +
    "</div>"
)


projects.addEventListener("click", e => {
    e.preventDefault();
    output.innerHTML = "";
    content.innerHTML = "";
    content.innerHTML = projectMessage
    allProjects.forEach(p => {
        let proLink = document.createElement('a');
        proLink.innerHTML = p;
        proLink.id = "project-link"
        proLink.href = ""
        content.appendChild(proLink);
        proLink.addEventListener("click", e => {
            e.preventDefault();
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