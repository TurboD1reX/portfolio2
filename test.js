const showMoreButtons = document.querySelectorAll('.button-project-view');
const projectInfos = document.querySelectorAll('.container-project-card');

showMoreButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const projectInfo = event.target.nextElementSibling;
    projectInfo.style.display = 'block';
  });
});

projectInfos.forEach((info) => {
 const closeButton = document.querySelectorAll('.close-btn');

  closeButton.addEventListener('click', () => {
    info.style.display = 'none';
  });
  info.appendChild(closeButton);
});