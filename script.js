const buttonsArray = [
    `<div id="65" class="mainButton">
    <span class="bigLetter">A</span>
    <span class="descriptionLetter">CLAP</span>
    </div>`,

    `<div id="83" class="mainButton">
    <span class="bigLetter">S</span>
    <span class="descriptionLetter">HIHAT</span>
    </div>`,

    `<div id="68" class="mainButton">
    <span class="bigLetter">D</span>
    <span class="descriptionLetter">KICK</span>
    </div>`,

    `<div id="70" class="mainButton">
    <span class="bigLetter">F</span>
    <span class="descriptionLetter">OPENHAT</span>
    </div>`,

    `<div id="71" class="mainButton">
    <span class="bigLetter">G</span>
    <span class="descriptionLetter">BOOM</span>
    </div>`,

    `<div id="72" class="mainButton">
    <span class="bigLetter">H</span>
    <span class="descriptionLetter">RIDE</span>
    </div>`,

    `<div id="74" class="mainButton">
    <span class="bigLetter">J</span>
    <span class="descriptionLetter">SNARE</span>
    </div>`,

    `<div id="75" class="mainButton">
    <span class="bigLetter">K</span>
    <span class="descriptionLetter">TOM</span>
    </div>`,

    `<div id="76" class="mainButton">
    <span class="bigLetter">L</span>
    <span class="descriptionLetter">TINK</span>
    </div> `
];

const soundsArrayObject = [
    new Audio ("/src/sounds/clap.wav"), 
    new Audio ("/src/sounds/hihat.wav"), 
    new Audio ("/src/sounds/kick.wav"), 
    new Audio ("/src/sounds/openhat.wav"),
    new Audio ("/src/sounds/boom.wav"), 
    new Audio ("/src/sounds/ride.wav"),
    new Audio ("/src/sounds/snare.wav"), 
    new Audio ("/src/sounds/tom.wav"),
    new Audio ("/src/sounds/tink.wav")   
];

const buttonsContainer = document.getElementById("main-container");
buttonsContainer.innerHTML = buttonsArray;


document.addEventListener("keydown", playSound);


const getMainButton = document.getElementsByClassName("mainButton");

getMainButton[0].addEventListener("click", aClapF);
getMainButton[1].addEventListener("click", sHihat);
getMainButton[2].addEventListener("click", dKick);
getMainButton[3].addEventListener("click", fOpenhat);
getMainButton[4].addEventListener("click", gBoom);
getMainButton[5].addEventListener("click", hRide);
getMainButton[6].addEventListener("click", jSnare);
getMainButton[7].addEventListener("click", kTom);
getMainButton[8].addEventListener("click", lTink);


function aClapF(){
    playSound("65");
}
function sHihat(){
    playSound("83");
}
function dKick(){
    playSound("68");
}
function fOpenhat(){
    playSound("70");
}
function gBoom(){
    playSound("71");
}
function hRide(){
    playSound("72");
}
function jSnare(){
    playSound("74");
}
function kTom(){
    playSound("75");
}
function lTink(){
    playSound("76");
}




function playSound(event) {

    if (event.keyCode == 65 || event == 65){
        soundsArrayObject[0].play();
        console.log(event.keyCode);
    } else
    if (event.keyCode == 83 || event == 83){
        soundsArrayObject[1].play();
    } else
    if (event.keyCode== 68 || event == 68){
        soundsArrayObject[2].play();
    } else
    if (event.keyCode == 70 || event == 70){
        soundsArrayObject[3].play();
    } else
    if (event.keyCode == 71 || event == 71){
        soundsArrayObject[4].play();
    } else
    if (event.keyCode == 72 || event == 72){
        soundsArrayObject[5].play();
    } else
    if (event.keyCode == 74 || event == 74){
        soundsArrayObject[6].play();
    } else
    if (event.keyCode == 75 || event == 75){
        soundsArrayObject[7].play();
    } else
    if (event.keyCode == 76 || event == 76){
        soundsArrayObject[8].play();
    }
};