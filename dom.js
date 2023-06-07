 const box=document.getElementsByClassName("box");

const green=document.getElementById("Green");

green.onclick=function(){
    box[0].style.backgroundColor="Green";
}

const purple=document.getElementById("Purple");

purple.onclick=function(){
    box[0].style.backgroundColor="Purple";
}

const blue=document.getElementById("Blue");

blue.onclick=function(){
    box[0].style.background=("Blue");
}

const red=document.getElementById("Red");
 
red.onclick=function(){
    box[0].style.background=("Red");
}

const name=document.getElementById("name");

name.onclick=function(){
    name.style.color=("red");
    
}

const para=document.getElementById("para");

anchor.onclick=function(){
  para.innerHTML="I am from Benglore Campus";  
}
