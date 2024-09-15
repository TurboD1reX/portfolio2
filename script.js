const body = document.querySelector('body');
const attentionDiv = document.createElement('div');
attentionDiv.classList.add('attention-cv');
attentionDiv.innerHTML = `
<div class="alert alert-danger d-flex position-fixed align-items-center col-sm-12 col-md-4" role="alert">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
    <div class="d-flex">
  <div>Send an message at <a href="contact.html">contact</a> then you can get my CV </div><span onclick="DecAttentionCV()">✖</span>
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
setInterval(DecAttentionCV, 10000);




const typewriterText = document.querySelector(".typewriter");
const phrases = ["Front-End Developer", "Back-End Developer",];

let phraseIndex = 0;
let charIndex = 0;
function type() {
  if (charIndex < phrases[phraseIndex].length) {
    typewriterText.textContent += phrases[phraseIndex][charIndex];
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1000);
  }
}

function erase() {
  if (charIndex > 0) {
    typewriterText.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, 250);
  }
}

type();

AOS.init();