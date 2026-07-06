const words=[
"Web Developer",
"Python Programmer",
"CSE Student",
"Problem Solver"
];
let i=0;
let j=0;
let current="";
let isDeleting=false;

function type(){

current=words[i];

if(isDeleting){

j--;

}else{

j++;

}

document.getElementById("typing").textContent=current.substring(0,j);

if(!isDeleting && j==current.length){

isDeleting=true;

setTimeout(type,1000);

return;

}

if(isDeleting && j==0){

isDeleting=false;

i++;

if(i==words.length){

i=0;

}

}

setTimeout(type,isDeleting?70:120);

}

type();



const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

sections.forEach(sec=>{

const top=window.scrollY;

const offset=sec.offsetTop-300;

if(top>offset){

sec.style.opacity="1";

sec.style.transform="translateY(0)";

}

});

});

sections.forEach(sec=>{

sec.style.opacity="0";

sec.style.transform="translateY(50px)";

sec.style.transition="1s";

});
