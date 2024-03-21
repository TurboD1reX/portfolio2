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
            <img src="img/projects/ksmlabel/1.png" class="img-bigger-projects-concret col-md-12" onclick="openImg('img/projects/ksmlabel/1.png')"  alt="">
            <div class="temp-concret-img">
            <img src="img/projects/ksmlabel/2.png" class="img-smaller-projects-concret col-md-6" onclick="openImg('img/projects/ksmlabel/2.png')" alt="">
            <img src="img/projects/ksmlabel/3.png" class="img-smaller-projects-concret col-md-6" onclick="openImg('img/projects/ksmlabel/3.png')" alt="">
            </div>
            </div>    
            <p class="content-text-projects-concret">
            KSM Label został zrealizowany w ciągu jednego roku, co potwierdza zaangażowanie i skuteczność zespołu założycielskiego.
            Ich innowacyjne podejście do tworzenia i promocji muzyki, oparte na współpracy między ludźmi a sztuczną inteligencją, przyniosło znaczące rezultaty w dziedzinie sztuki i rozrywki.
            </p>
            <p class="content-text-projects-concret">

            KSM Label to projekt założony przez Kacpra, Stasia i Maksa w 2023 roku, mający na celu wykorzystanie sztucznej inteligencji do produkcji i promocji muzyki.
            Projekt dał także szansę na debiut Sibiego, uznawanego za najnowszego artystę tego roku.
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
            <img src="img/projects/colorJS/1.png" class="img-bigger-projects-concret col-md-12" onclick="openImg('img/projects/colorJS/1.png')"  alt="">
            <div class="temp-concret-img">
            <img src="img/projects/colorJS/2.png" class="img-smaller-projects-concret col-md-6" onclick="openImg('img/projects/colorJS/2.png')" alt="">
            <img src="img/projects/colorJS/3.png" class="img-smaller-projects-concret col-md-6" onclick="openImg('img/projects/colorJS/3.png')" alt="">
            </div>
            </div>    
            <p class="content-text-projects-concret">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has
            </p>
            <p class="content-text-projects-concret">
                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
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
            <img src="img/projects/dbd/1.png" class="img-bigger-projects-concret col-md-12" onclick="openImg('img/projects/dbd/1.png')"  alt="">
            <div class="temp-concret-img">
            <img src="img/projects/dbd/2.png" class="img-smaller-projects-concret col-md-6" onclick="openImg('img/projects/dbd/2.png')" alt="">
            <img src="img/projects/dbd/3.png" class="img-smaller-projects-concret col-md-6" onclick="openImg('img/projects/dbd/3.png')" alt="">
            </div>
            </div>    
            <p class="content-text-projects-concret">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has
            </p>
            <p class="content-text-projects-concret">
                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
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
            <img src="img/projects/form-db/1.png" class="img-bigger-projects-concret col-md-12" onclick="openImg('img/projects/form-db/1.png')"  alt="">
            <div class="temp-concret-img">

            </div>
            </div>    
            <p class="content-text-projects-concret">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has
            </p>
            <p class="content-text-projects-concret">
                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
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
            <img src="img/projects/fukaj/1.png" class="img-smaller-projects-concret col-md-8" onclick="openImg('img/projects/fukaj/1.png')" alt="">
            <img src="img/projects/fukaj/2.png" class="img-smaller-projects-concret col-md-8" onclick="openImg('img/projects/fukaj/2.png')" alt="">
            </div>
            <p class="content-text-projects-concret">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has
            </p>
            <p class="content-text-projects-concret">
                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
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
            <img src="img/projects/game/1.png" class="img-bigger-projects-concret col-md-12" onclick="openImg('img/projects/game/1.png')"  alt="">
            <div class="temp-concret-img">
            <img src="img/projects/game/2.png" class="img-smaller-projects-concret col-md-6" onclick="openImg('img/projects/game/2.png')" alt="">
            <img src="img/projects/game/3.png" class="img-smaller-projects-concret col-md-6" onclick="openImg('img/projects/game/3.png')" alt="">
            </div>
            </div>    
            <p class="content-text-projects-concret">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has
            </p>
            <p class="content-text-projects-concret">
                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
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
            <img src="img/projects/meble/1.png" class="img-bigger-projects-concret col-md-12" onclick="openImg('img/projects/meble/1.png')"  alt="">
            <div class="temp-concret-img">
            <img src="img/projects/meble/2.png" class="img-smaller-projects-concret col-md-6" onclick="openImg('img/projects/meble/2.png')" alt="">
            <img src="img/projects/meble/3.png" class="img-smaller-projects-concret col-md-6" onclick="openImg('img/projects/meble/3.png')" alt="">
            </div>
            </div>    
            <p class="content-text-projects-concret">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has
            </p>
            <p class="content-text-projects-concret">
                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including
                versions of Lorem Ips''
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
            <img src="img/projects/miwatch/1.png" class="img-bigger-projects-concret col-md-12" onclick="openImg('img/projects/miwatch/1.png')"  alt="">
            <div class="temp-concret-img">
            <img src="img/projects/miwatch/2.png" class="img-smaller-projects-concret col-md-6" onclick="openImg('img/projects/miwatch/2.png')" alt="">
            <img src="img/projects/miwatch/3.png" class="img-smaller-projects-concret col-md-6" onclick="openImg('img/projects/miwatch/3.png')" alt="">
            </div>
            </div>    
            <p class="content-text-projects-concret">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has
            </p>
            <p class="content-text-projects-concret">
                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
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
            <img src="img/projects/miband/1.png" class="img-smaller-projects-concret col-md-8" onclick="openImg('img/projects/miband/1.png')" alt="">
            <img src="img/projects/miband/2.png" class="img-smaller-projects-concret col-md-8" onclick="openImg('img/projects/miband/2.png')" alt="">
            </div>
   
            <p class="content-text-projects-concret">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has
            </p>
            <p class="content-text-projects-concret">
                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
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
        <figcaption>"Dead by Daylight" heroes</figcaption>
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
const body = document.querySelector("body");
const mainContainer = document.querySelector(".container-fluid");
const containerImg = document.createElement('div');
containerImg.classList.add('containerImgOpen');
body.insertBefore(containerImg, mainContainer);

function openImg(img) {
    containerImg.innerHTML = `<span class='close-icon-openedimg' onclick='closeImg()'>✖</span><img src='${img}'>`;
    containerImg.style.display = "flex";
}
function closeImg(){
    containerImg.style.display = 'none';
}