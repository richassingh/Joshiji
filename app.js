let ybtn = document.querySelector("#ybtn");
let nbtn = document.querySelector("#nbtn");
let wrappper= document.querySelector(".wrapper");
let h1= document.querySelector("h1");


nbtn.addEventListener("mouseover",change);
function change()
{
    var i = Math.floor(Math.random()*500)+1;
    var j = Math.floor(Math.random()*500)+1;
    nbtn.style.left = i+"px";
    nbtn.style.top = j+"px";
};


 ybtn.addEventListener("click", ()=>{
    h1.innerHTML ="I Love You Too Baby &hearts;";
 });
