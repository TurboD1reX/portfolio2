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
            <div class="title-concret mb-5">KSM LABEL</div>
            <div class="img-container col-sm-12">
            <img src="img/projects/ksmlabel/1.png" class="img-bigger-projects-concret img-fluid col-md-12" onclick="openImg('img/projects/ksmlabel/1.png','1.png')"  alt="">
            <div class="display-flex justify-content-center">
            <img src="img/projects/ksmlabel/2.png" class="img-smaller-projects-concret img-fluid col-sm-12 col-md-6" onclick="openImg('img/projects/ksmlabel/2.png','2.png')" alt="">
            <img src="img/projects/ksmlabel/3.png" class="img-smaller-projects-concret img-fluid col-sm-12 col-md-6" onclick="openImg('img/projects/ksmlabel/3.png','3.png')" alt="">
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
            <div class="title-concret mb-5">Jewellery website</div>
            <div class="img-container col-sm-12">
            <img src="img/projects/bizuteria/1.png" class="img-bigger-projects-concret img-fluid col-md-12" onclick="openImg('img/projects/bizuteria/1.png','1.png')"  alt="">
            <div class="display-flex justify-content-center">
            <img src="img/projects/bizuteria/2.png" class="img-smaller-projects-concret img-fluid col-sm-12 col-md-6" onclick="openImg('img/projects/bizuteria/2.png','2.png')" alt="">
            <img src="img/projects/bizuteria/3.png" class="img-smaller-projects-concret img-fluid col-sm-12 col-md-6" onclick="openImg('img/projects/bizuteria/3.png','3.png')" alt="">
            </div>
            </div>    
   
            <p class="content-text-projects-concret">
            Project created for my classmate on database lections.
            </p>

            </div>
            </div>`;
            break;
        case 3:
            projects.innerHTML = `
            <div class="concret">
            <span class="close-icon" onclick="closeProjectDetails()">✖</span>
            <div class="concret-container col-sm-12 col-md-6">
            <div class="title-concret mb-5">Marvel heroes</div>
            <div class="img-container col-sm-12">
            <img src="img/projects/dbd/1.png" class="img-bigger-projects-concret img-fluid col-md-12" onclick="openImg('img/projects/dbd/1.png','1.png')"  alt="">
            <div class="display-flex justify-content-center">
            <img src="img/projects/dbd/2.png" class="img-smaller-projects-concret img-fluid col-sm-12 col-md-6" onclick="openImg('img/projects/dbd/2.png','2.png')" alt="">
            <img src="img/projects/dbd/3.png" class="img-smaller-projects-concret img-fluid col-sm-12 col-md-6" onclick="openImg('img/projects/dbd/3.png','3.png')" alt="">
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
            <div class="title-concret mb-5">Form Database</div>
            <div class="img-container col-sm-12">
            <img src="img/projects/form-db/1.png" class="img-bigger-projects-concret img-fluid col-md-12" onclick="openImg('img/projects/form-db/1.png','1.png')"  alt="">
            <div class="display-flex justify-content-center">

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
            <div class="title-concret mb-5">Fukaj</div>

            <div class="display-flex justify-content-center">
            <img src="img/projects/fukaj/1.png" class="img-smaller-projects-concret img-fluid col-sm-12 col-md-8" onclick="openImg('img/projects/fukaj/1.png','1.png')" alt="">
            <img src="img/projects/fukaj/2.png" class="img-smaller-projects-concret img-fluid col-sm-12 col-md-8" onclick="openImg('img/projects/fukaj/2.png','2.png')" alt="">
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
            <div class="title-concret mb-5">Game</div>
            <div class="img-container col-sm-12">
            <img src="img/projects/game/1.png" class="img-bigger-projects-concret img-fluid col-md-12" onclick="openImg('img/projects/game/1.png','1.png')"  alt="">
            <div class="display-flex justify-content-center">
            <img src="img/projects/game/2.png" class="img-smaller-projects-concret img-fluid col-sm-12 col-md-6" onclick="openImg('img/projects/game/2.png','2.png')" alt="">
            <img src="img/projects/game/3.png" class="img-smaller-projects-concret img-fluid col-sm-12 col-md-6" onclick="openImg('img/projects/game/3.png','3.png')" alt="">
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
            <div class="title-concret mb-5">Meble "Aura"</div>
            <div class="img-container col-sm-12">
            <img src="img/projects/meble/1.png" class="img-bigger-projects-concret img-fluid col-md-12" onclick="openImg('img/projects/meble/1.png','1.png')"  alt="">
            <div class="display-flex justify-content-center">
            <img src="img/projects/meble/2.png" class="img-smaller-projects-concret img-fluid col-sm-12 col-md-6" onclick="openImg('img/projects/meble/2.png','2.png')" alt="">
            <img src="img/projects/meble/3.png" class="img-smaller-projects-concret img-fluid col-sm-12 col-md-6" onclick="openImg('img/projects/meble/3.png','3.png')" alt="">
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
            <div class="title-concret mb-5">Mi Watch "Ivory"</div>
            <div class="img-container col-sm-12">
            <img src="img/projects/miwatch/1.png" class="img-bigger-projects-concret img-fluid col-md-12" onclick="openImg('img/projects/miwatch/1.png','1.png')"  alt="">
            <div class="display-flex justify-content-center">
            <img src="img/projects/miwatch/2.png" class="img-smaller-projects-concret img-fluid col-sm-12 col-md-6" onclick="openImg('img/projects/miwatch/2.png','2.png')" alt="">
            <img src="img/projects/miwatch/3.png" class="img-smaller-projects-concret img-fluid col-sm-12 col-md-6" onclick="openImg('img/projects/miwatch/3.png','3.png')" alt="">
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
            <div class="title-concret mb-5 ">Tomatos website</div>
            <div class="img-container col-sm-12">
            <img src="img/projects/pomidory/1.png" class="img-bigger-projects-concret img-fluid col-sm-12 col-md-12" onclick="openImg('img/projects/pomidory/1.png','1.png')"  alt="">
            <div class="display-flex justify-content-center">
            <img src="img/projects/pomidory/2.png" class="img-smaller-projects-concret img-fluid col-sm-12 col-md-6" onclick="openImg('img/projects/pomidory/2.png','2.png')" alt="">
            <img src="img/projects/pomidory/3.png" class="img-smaller-projects-concret img-fluid col-sm-12 col-md-6" onclick="openImg('img/projects/pomidory/3.png','3.png')" alt="">
            </div>
            </div> 
            <p class="content-text-projects-concret">
            The project, which also created for lessons was completed in just 11 minutes. 

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
        <img src="img/projects/labels/1.png" class="img img-fluid rounded" alt="KSM Label">
        <figcaption>KSM Label</figcaption>
        </div>
        <div class="img-container"onclick="projectsDetail(2)">
        <img src="img/projects/labels/2.png" class="img img-fluid rounded" alt="">
        <figcaption>Jewellery website</figcaption>
        </div>
        <div class="img-container"onclick="projectsDetail(3)">
        <img src="img/projects/labels/3.png" class="img img-fluid rounded" alt="">
        <figcaption>Marvel heroes</figcaption>
        </div>
        <div class="img-container"onclick="projectsDetail(4)">
        <img src="img/projects/labels/4.png" class="img img-fluid rounded" alt="">
        <figcaption>Form Database</figcaption>
        </div>
        <div class="img-container"onclick="projectsDetail(5)">
        <img src="img/projects/labels/5.png" class="img img-fluid rounded" alt="">
        <figcaption>Fukaj</figcaption>
        </div>
        <div class="img-container"onclick="projectsDetail(6)">
        <img src="img/projects/labels/6.png" class="img img-fluid rounded" alt="">
        <figcaption>Game</figcaption>
        </div>
        <div class="img-container"onclick="projectsDetail(7)">
        <img src="img/projects/labels/7.png" class="img img-fluid rounded" alt="">
        <figcaption>Meble "Aura"</figcaption>
        </div>
        <div class="img-container"onclick="projectsDetail(8)">
        <img src="img/projects/labels/8.png" class="img img-fluid rounded" alt="">
        <figcaption>Mi Watch "Ivory"</figcaption>
        </div>
        <div class="img-container" onclick="projectsDetail(9)">
        <img src="img/projects/labels/9.png" class="img img-fluid rounded" alt="">
        <figcaption>Tomatos website</figcaption>
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
const navigator = document.querySelector('nav');

function openImg(img,concreteImg) {
    containerImg.innerHTML = `<span class='close-icon-openedimg' onclick='closeImg()'>✖</span><img src='${img}' class='col-md-10'> <a href="${img}" download="${concreteImg}"><i class='fa fa-download download-icon'></i></a>`;
    containerImg.style.display = "flex";
    navigator.style.zIndex="0";
}
function closeImg(){
    containerImg.style.display = 'none';
    navigator.style.zIndex="20";
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
<div class="alert alert-danger d-flex position-fixed align-items-center col-sm-12 col-md-4" role="alert">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
    <div class="d-flex">
  <div>Send an message at <a href="contact.html">contact</a> then I'll send you my CV </div><span onclick="DecAttentionCV()">✖</span>
    </div>
</div>
`;
body.appendChild(attentionDiv);



function IncAttentionCV(){
    attentionDiv.style.transform  = 'translate(0%)';
}
function DecAttentionCV() {
    attentionDiv.style.transform  = 'translate(-100%)';

}
setInterval(DecAttentionCV, 6000);



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
        } else {
            console.error("Error:", response);
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
});