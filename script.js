const reveals = document.querySelectorAll(".reveal");

function revealSections(){

const trigger = window.innerHeight * 0.85;

reveals.forEach(section=>{

const top = section.getBoundingClientRect().top;

if(top < trigger){

section.classList.add("active");

}

});

}

window.addEventListener("scroll",revealSections);

revealSections();

const progressFill=document.getElementById("progressFill");

const progressPercent=document.getElementById("progressPercent");

let progress=12;

let current=0;

function animateProgress(){

if(current<progress){

current++;

progressFill.style.width=current+"%";
progressPercent.innerText=current+"%";

requestAnimationFrame(animateProgress);

}

}

animateProgress();

document.querySelectorAll("a[href^='#']").forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});
