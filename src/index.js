// const A = document.getElementsByClassName("buttonA");

// const soundFile = [
//     new Audio ('clap.wav'),
//     new Audio ('hihat.wav'),
//     new Audio ('kick.wav'),
//     new Audio ('openhat.wav'),
//     new Audio ('boom.wav'),
//     new Audio ('ride.wav'),
//     new Audio ('snare.wav'),
//     new Audio ('tom.wav'),
//     new Audio ('tink.wav'),
// ]

// console.log(A);

// A.addEventListener("click");

const soundFile = {
  key: 65,
  sound: new Audio("clap.wav"),
};

document.addEventListener("keydown", test);

function test(event) {
  if (event.keyCode == soundFile.key) {
    soundFile.sound.play();
  }

  console.log(event.keyCode);
}
