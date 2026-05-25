const text = [
  "Web Developer",
  "CSE Student",
  "Frontend Learner",
  "Tech Enthusiast"
];

let speed = 100;

const textElements =
document.querySelector(".hero-text h3");

let textIndex = 0;
let charIndex = 0;

function typeWriter(){

  if(charIndex < text[textIndex].length){

    textElements.innerHTML +=
    text[textIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeWriter, speed);

  }

  else{

    setTimeout(eraseText, 1500);

  }

}

function eraseText(){

  if(textElements.innerHTML.length > 0){

    textElements.innerHTML =
    textElements.innerHTML.slice(0,-1);

    setTimeout(eraseText, 50);

  }

  else{

    textIndex++;

    if(textIndex >= text.length){
      textIndex = 0;
    }

    charIndex = 0;

    setTimeout(typeWriter, 500);

  }

}

window.onload = typeWriter;