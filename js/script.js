const Lalala = "Druk op OK om de website te laden";
let Lelele1;

alert(Lalala);

const background = document.querySelector("#background")

function changeColor (){
    document.body.style.backgroundColor = "blue"}

background.addEventListener("click",changeColor)

const golf = document.querySelector("#golf")

function chanceimage(){
    golf.src = "img/audi.jpg"
}
golf.addEventListener("click",chanceimage)

const titel = document.querySelector("h1")

function rotatetext() {
    document.querySelectorAll("h1, img, button").forEach(function (element) {
        element.style.transform = "rotate(180deg)"
    })
}

titel.addEventListener("click", rotatetext)

const voetbal = document.querySelector("#voetbal")

function rotate() {
    voetbal.style.transform = "rotate(90deg)"
}

voetbal.addEventListener("click", rotate)

function del() {
    audi.style.display = "none";
}

audi.style.visibility = "hidden";

audi.addEventlistener("click", del);

const popUpEasterEgg = document.querySelector("p");

function popUp () {

    alert("This is my popup!");

}

popUpEasterEgg.addEventListener("click", popUp);

console.log("jDASKJSDJK");

const KLEUR = document.querySelector("#KLEUR")

function mouseover () {
    document.querySelector("#KLEUR").style.color = "Green";
}

function mouseout () {
    document.querySelector("#KLEUR").style.color = "Green";
}

KLEUR.addEventListener("mouseover", mouseover)
KLEUR.addEventListener("mouseover", mouseout)
const setv = document.querySelector("#setv")
setInterval(function () {setv.innerHTML += "Laatste"}, 10000)
