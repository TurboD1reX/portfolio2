function projectsDetail(x) {
    var projectsContainer= document.querySelector('.projects-container');
    var projects= document.querySelector('.projects');
    projectsContainer.style.display = 'none';
    switch (x) {
        case 1:
            projects.innerHTML = `
            <div class="concret">
            <span class="close-icon" onclick="closeProjectDetails()">✖</span>
            <div class="concret-container col-sm-12 col-md-6">
            <div class="title-concret">KSM LABEL</div>
            <div class="img-container col-sm-12">
            <img src="img/projects/ksmlabel/1.png" class="img-bigger-projects-concret col-md-12" onclick="openImg('img/projects/ksmlabel/1.png','1.png')"  alt="">
            <div class="temp-concret-img">
            <img src="img/projects/ksmlabel/2.png" class="img-smaller-projects-concret col-sm-12 col-md-6" onclick="openImg('img/projects/ksmlabel/2.png','2.png')" alt="">
            <img src="img/projects/ksmlabel/3.png" class="img-smaller-projects-concret col-sm-12 col-md-6" onclick="openImg('img/projects/ksmlabel/3.png','3.png')" alt="">
            </div>
            </div>    
            <p class="content-text-projects-concret">
            KSM Label was realized within one year, confirming the commitment and effectiveness of the founding team.
            Their innovative approach to creating and promoting music, based on collaboration between humans and artificial intelligence, has brought significant results in the field of art and entertainment.
            </p>
            <p class="content-text-projects-concret">

            KSM Label is a project founded by Kacper, Stas, and Max in 2023, aimed at utilizing artificial intelligence for music production and promotion. 
            The project also provided an opportunity for the debut of Sibi, recognized as the newest artist of the year.
            </p>
            </div>
            </div>`;
            break;
        case 2:
            projects.innerHTML = `
            <div class="concret">
            <span class="close-icon" onclick="closeProjectDetails()">✖</span>
            <div class="concret-container col-sm-12 col-md-6">
            <div class="title-concret">Choosing color JS</div>
            <div class="img-container col-sm-12">
            <img src="img/projects/colorJS/1.png" class="img-bigger-projects-concret col-md-12" onclick="openImg('img/projects/colorJS/1.png','1.png')"  alt="">
            <div class="temp-concret-img">
            <img src="img/projects/colorJS/2.png" class="img-smaller-projects-concret col-sm-12 col-md-6" onclick="openImg('img/projects/colorJS/2.png','2.png')" alt="">
            <img src="img/projects/colorJS/3.png" class="img-smaller-projects-concret col-sm-12 col-md-6" onclick="openImg('img/projects/colorJS/3.png','3.png')" alt="">
            </div>
            </div>    
            <p class="content-text-projects-concret">
            The Choosing Color JS task was a classroom assignment focusing on JavaScript. 
            Its goal was to have students apply their JavaScript knowledge to build a project centered around color selection. 
            They were tasked with creating a user interface allowing interactive color selection and real-time display of changes.
            </p>
            <p class="content-text-projects-concret">
            Initially, students had to design a basic layout for the color selection interface using HTML and CSS. Then, they implemented JavaScript functionality to enable dynamic color changes based on user input. 
            This exercise provided practical experience in integrating HTML, CSS, and JavaScript for creating interactive web applications.
            </p>
            </div>
            </div>`;
            break;
        case 3:
            projects.innerHTML = `
            <div class="concret">
            <span class="close-icon" onclick="closeProjectDetails()">✖</span>
            <div class="concret-container col-sm-12 col-md-6">
            <div class="title-concret">Marvel heroes</div>
            <div class="img-container col-sm-12">
            <img src="img/projects/dbd/1.png" class="img-bigger-projects-concret col-md-12" onclick="openImg('img/projects/dbd/1.png','1.png')"  alt="">
            <div class="temp-concret-img">
            <img src="img/projects/dbd/2.png" class="img-smaller-projects-concret col-sm-12 col-md-6" onclick="openImg('img/projects/dbd/2.png','2.png')" alt="">
            <img src="img/projects/dbd/3.png" class="img-smaller-projects-concret col-sm-12 col-md-6" onclick="openImg('img/projects/dbd/3.png','3.png')" alt="">
            </div>
            </div>    
            <p class="content-text-projects-concret">
            I recently completed a project for a friend who needed help with adding <a> links to his webpage.
            It took me around 23 minutes to assist him in this task, and he was pleased with the outcome.
            </p>
            <p class="content-text-projects-concret">
            To make the project more interesting, I decided to incorporate four popular Marvel characters: Iron Man, Spider-Man, Black Widow, and Captain America. 
            It added a fun touch to the task while showcasing the implementation of <a> links in HTML.
            </p>
            </div>
            </div>`;
            break;
        case 4:
            projects.innerHTML = `
            <div class="concret">
            <span class="close-icon" onclick="closeProjectDetails()">✖</span>
            <div class="concret-container col-sm-12 col-md-6">
            <div class="title-concret">Form Database</div>
            <div class="img-container col-sm-12">
            <img src="img/projects/form-db/1.png" class="img-bigger-projects-concret col-md-12" onclick="openImg('img/projects/form-db/1.png','1.png')"  alt="">
            <div class="temp-concret-img">

            </div>
            </div>    
            <p class="content-text-projects-concret">
            When creating this project, the main focus was on integrating databases.
            The objective was to ensure that upon form submission, the corresponding data table from the database would also be displayed.
            This feature aimed to enhance user interaction and provide a seamless experience when accessing and submitting forms.
            </p>
            </div>
            </div>`;
            break;
        case 5:
            projects.innerHTML = `
            <div class="concret">
            <span class="close-icon" onclick="closeProjectDetails()">✖</span>
            <div class="concret-container col-sm-12 col-md-6">
            <div class="title-concret">Fukaj</div>

            <div class="temp-concret-img col-sm-12">
            <img src="img/projects/fukaj/1.png" class="img-smaller-projects-concret col-sm-12 col-md-8" onclick="openImg('img/projects/fukaj/1.png','1.png')" alt="">
            <img src="img/projects/fukaj/2.png" class="img-smaller-projects-concret col-sm-12 col-md-8" onclick="openImg('img/projects/fukaj/2.png','2.png')" alt="">
            </div>
            <p class="content-text-projects-concret">
            This project was made for counting down to concerts using JavaScript.
            </p>

            </div>
            </div>`;
            break;
        case 6:
            projects.innerHTML = `
            <div class="concret">
            <span class="close-icon" onclick="closeProjectDetails()">✖</span>
            <div class="concret-container col-sm-12 col-md-6">
            <div class="title-concret">Game</div>
            <div class="img-container col-sm-12">
            <img src="img/projects/game/1.png" class="img-bigger-projects-concret col-md-12" onclick="openImg('img/projects/game/1.png','1.png')"  alt="">
            <div class="temp-concret-img">
            <img src="img/projects/game/2.png" class="img-smaller-projects-concret col-sm-12 col-md-6" onclick="openImg('img/projects/game/2.png','2.png')" alt="">
            <img src="img/projects/game/3.png" class="img-smaller-projects-concret col-sm-12 col-md-6" onclick="openImg('img/projects/game/3.png','3.png')" alt="">
            </div>
            </div>    
            <p class="content-text-projects-concret">
            This game was developed as part of a classroom project. 
            The concept involves choosing a character, after which the system randomly selects an opponent. 
            Then, it calculates the strength of your character versus the opponent's. Winning increases the points by a random number between 100 to 160, while losing deducts 110 points.
            </p>

            </div>
            </div>`;
            break;
        case 7:
            projects.innerHTML = `
            <div class="concret">
            <span class="close-icon" onclick="closeProjectDetails()">✖</span>
            <div class="concret-container col-sm-12 col-md-6">
            <div class="title-concret">Meble "Aura"</div>
            <div class="img-container col-sm-12">
            <img src="img/projects/meble/1.png" class="img-bigger-projects-concret col-md-12" onclick="openImg('img/projects/meble/1.png','1.png')"  alt="">
            <div class="temp-concret-img">
            <img src="img/projects/meble/2.png" class="img-smaller-projects-concret col-sm-12 col-md-6" onclick="openImg('img/projects/meble/2.png','2.png')" alt="">
            <img src="img/projects/meble/3.png" class="img-smaller-projects-concret col-sm-12 col-md-6" onclick="openImg('img/projects/meble/3.png','3.png')" alt="">
            </div>
            </div>    
            <p class="content-text-projects-concret">
            The project was created as a part of a subpage focusing on databases.
            </p>
            </div>
            </div>`;
            break;
        case 8:
            projects.innerHTML = `
            <div class="concret">
            <span class="close-icon" onclick="closeProjectDetails()">✖</span>
            <div class="concret-container col-sm-12 col-md-6">
            <div class="title-concret">Mi Watch "Ivory"</div>
            <div class="img-container col-sm-12">
            <img src="img/projects/miwatch/1.png" class="img-bigger-projects-concret col-md-12" onclick="openImg('img/projects/miwatch/1.png','1.png')"  alt="">
            <div class="temp-concret-img">
            <img src="img/projects/miwatch/2.png" class="img-smaller-projects-concret col-sm-12 col-md-6" onclick="openImg('img/projects/miwatch/2.png','2.png')" alt="">
            <img src="img/projects/miwatch/3.png" class="img-smaller-projects-concret col-sm-12 col-md-6" onclick="openImg('img/projects/miwatch/3.png','3.png')" alt="">
            </div>
            </div>    
            <p class="content-text-projects-concret">
            The Mi Watch "Ivory" project was a milestone in my programming journey, conceived during my first year. 
            Initially meant to be a basic digital watch, it evolved into a mini-project where I could experiment with new technologies like background-image: linear-gradient(). 
            This expansion not only enhanced the project's functionality but also provided me with valuable learning opportunities, marking an important step forward in my programming skills.
            </p>

            </div>
            </div>`;
            break;
        case 9:
            projects.innerHTML = `
            <div class="concret">
            <span class="close-icon" onclick="closeProjectDetails()">✖</span>
            <div class="concret-container col-sm-12 col-md-6">
            <div class="title-concret">Mi Band</div>
            <div class="temp-concret-img col-sm-12">
            <img src="img/projects/miband/1.png" class="img-smaller-projects-concret col-sm-12 col-md-8" onclick="openImg('img/projects/miband/1.png','1.png')" alt="">
            <img src="img/projects/miband/2.png" class="img-smaller-projects-concret col-sm-12 col-md-8" onclick="openImg('img/projects/miband/2.png','2.png')" alt="">
            </div>
   
            <p class="content-text-projects-concret">
            The project, which also included the Mi Band, was completed in just 11 minutes. 
            This rapid development highlights my efficiency and understanding of the task at hand. Despite the short timeframe, the project was thorough, reflecting my ability to swiftly comprehend and execute concepts.
            </p>

            </div>
            </div>`;
            break;
        default:
    }
}
function closeProjectDetails(){
    document.querySelector('.concret').style.display = "none";
    document.querySelector('.projects').innerHTML = `
    <div class="projects-container">
    <div class="title-project">my projects</div>
    <div class="projects-img">
        <div class="img-container"onclick="projectsDetail(1)">
        <img src="img/projects/ksmlabel/1.png" class="img img-fluid" alt="KSM Label">
        <figcaption>KSM Label</figcaption>
        </div>
        <div class="img-container"onclick="projectsDetail(2)">
        <img src="img/projects/colorJS/1.png" class="img img-fluid" alt="">
        <figcaption>Choosing color JS</figcaption>
        </div>
        <div class="img-container"onclick="projectsDetail(3)">
        <img src="img/projects/dbd/1.png" class="img img-fluid" alt="">
        <figcaption>Marvel heroes</figcaption>
        </div>
        <div class="img-container"onclick="projectsDetail(4)">
        <img src="img/projects/form-db/1.png" class="img img-fluid" alt="">
        <figcaption>Form Database</figcaption>
        </div>
        <div class="img-container"onclick="projectsDetail(5)">
        <img src="img/projects/fukaj/1.png" class="img img-fluid" alt="">
        <figcaption>Fukaj</figcaption>
        </div>
        <div class="img-container"onclick="projectsDetail(6)">
        <img src="img/projects/game/1.png" class="img img-fluid" alt="">
        <figcaption>Game</figcaption>
        </div>
        <div class="img-container"onclick="projectsDetail(7)">
        <img src="img/projects/meble/1.png" class="img img-fluid" alt="">
        <figcaption>Meble "Aura"</figcaption>
        </div>
        <div class="img-container"onclick="projectsDetail(8)">
            <img src="img/projects/miwatch/1.png" class="img img-fluid" alt="">
        <figcaption>Mi Watch "Ivory"</figcaption>
        </div>
        <div class="img-container" onclick="projectsDetail(9)">
        <img src="img/projects/miband/1.png" class="img img-fluid" alt="">
        <figcaption>Mi Band</figcaption>
            </div>
        </div>
    </div>
    `;
}
const body = document.querySelector('body');
const mainContainer = document.querySelector(".container-fluid");
const containerImg = document.createElement('div');
containerImg.classList.add('containerImgOpen');
body.insertBefore(containerImg, mainContainer);

function openImg(img,concreteImg) {
    containerImg.innerHTML = `<span class='close-icon-openedimg' onclick='closeImg()'>✖</span><img src='${img}' class='col-md-10'> <a href="${img}" download="${concreteImg}"><i class='fa fa-download download-icon'></i></a>`;
    containerImg.style.display = "flex";
}
function closeImg(){
    containerImg.style.display = 'none';
}


var mainAbout = document.querySelector('.main');
var projectsContainer = document.querySelector('.projects');
function projectsRedirect(){
    projectsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function aboutRedirect(){
    mainAbout.scrollIntoView({ behavior: 'smooth', block: 'start' });
}




const attentionDiv = document.createElement('div');
attentionDiv.classList.add('attention-cv');
attentionDiv.innerHTML = `
    <div class='dec-button' onclick='DecAttentionCV()'>✖</div>
    <div class='content-attention-cv'>Send a message then I'll send you my CV!</div>
`;
body.appendChild(attentionDiv);



function IncAttentionCV(){
    attentionDiv.style.transform  = 'translate(0%)';
}
function DecAttentionCV() {
    attentionDiv.style.transform  = 'translate(100%)';
}
setInterval(DecAttentionCV, 7000);



document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var formData = new FormData(this);

    fetch("php/contact.php", {
        method: "POST",
        body: formData
    })
    .then(response => {
        if (response.ok) {
            var mainSubmit = document.getElementById('mainContact');
            mainSubmit.innerHTML = `
            <div class='submit-done col-sm-12 col-md-8'>
            <i class='fa fa-check-circle-o' style="font-size:120px"></i>
            <div class="content-submit-done">Your message has been sent. Thank you!</div>
            <a href="index.html">Back to homepage.</a>
            </div>`;
            alert("okej");
        } else {
            console.error("Error:", response);
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
});