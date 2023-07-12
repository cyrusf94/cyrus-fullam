const contact = document.getElementById("contact");
const content = document.getElementById("content");
const output = document.getElementById("output");

const contactMe = "<h1>Contact Me</h1>"
const contactMessage = "<p>Feel free to reach me on linkedIn or check out my GitHub!</p><br>"
const linkedin = "<a href='https://www.linkedin.com/in/cyrus-fullam-837564278/'>LinkedIn</a><br>"
const github = "<a href='https://github.com/cyrusf94'>GitHub</a><br>"
const resume = (
    "<p>Grab a copy of my resume</p><br>" +
    "<a href='./assets/cyrus-fullam-resume.pdf' download><img src='./assets/resume-screenshot.jpg' alt='My Resume' id='resume'></a>"
)

contact.addEventListener("click", e => {
    e.preventDefault();
    content.innerHTML = contactMe + contactMessage + linkedin + github + resume;
})