const about = document.getElementById("about");
const content = document.getElementById("content");
const output = document.getElementById("output");

const img = "<br><img src='./assets/cyrus-fullam.jpeg' alt='Cyrus Fullam image' width='200'><br>"
const intro = "<h1>Hi I'm Cyrus,</h1><h3>.NET Developer</h3><br>"
const aboutMe = (
    "<p> &emsp; I was a mechanic for 7+ years but decided to make the switch to software development." +
    "  I have always been drawn to tech and have a strong curiosity for how things work.</P><br>" +
    "<p> &emsp; In 2014 I learned the fundamentals of OOP through Vermont Technical College." +
    "  Life ended up getting in the way and I was unable to pursue coding for the time being." +
    "  In May 2023 I got the oppurtunity to attend Upright edu software development bootcamp.</p><br>" +
    "<p> &emsp; The program reignited my love for learning and helped me hone my skills." +
    "  I am so greatful that the path I have chosen allows me to learn and create everyday.</p><br>"

)

const skills = (
    "<div id='skills'>" +
    "<h1>Skills:</h1>" +
    "<ul>" +
    "<li>- JavaScript</li>" +
    "<li>- HTML & CSS</li>" +
    "<li>- C#</li>" +
    "<li>- SQL/SSMS</li>" +
    "<li>- .NET</li>" +
    "<li>- WPF</li>" +
    "<li>- Blazor</li>" +
    "<li>- WebForms</li>" +
    "<li>- IIS</li>" +
    "<li>- Git/GitHub</li><br>" +
    "<p></p><br>" +
    "<p></p><br>" +
    "</ul>" +
    "</div>"
)



about.addEventListener("click", e => {
    output.innerHTML = "";
    content.innerHTML = (
        img + intro + aboutMe + skills
    )
    
})
