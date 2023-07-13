const about = document.getElementById("about");
const content = document.getElementById("content");
const output = document.getElementById("output");

const img = "<img src='./assets/cyrus-fullam.jpeg' alt='cyrus' width='200'><br>"
const intro = "<h1>Hi I'm Cyrus,</h1><br>"
const aboutMe = (
    "<p> &emsp; I was a mechanic for 7+ years but decided to make the switch to software development.</p>" +
    "<p>I have always been drawn to tech and have a strong curiosity for how things work.</P>" +
    "<p>In 2014 I learned the fundamentals of OOP through Vermont Technical College.</P>" +
    "<p>Life ended up getting in the way and I was unable to pursue coding for the time being.</p>" +
    "<p>In May 2023 I got the oppurtunity to attend Upright edu software development bootcamp.</p>" +
    "<p>the program reignited my love for learning and helped me hone my skills.</p>" +
    "<p>I am so greatful that the path I have chosen allows me to learn and create everyday.</p>"

)



about.addEventListener("click", e => {
    e.preventDefault();
    output.innerHTML = "";
    content.innerHTML = (
        img + intro + aboutMe
    )
    
})
