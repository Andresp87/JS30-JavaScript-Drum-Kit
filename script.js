
document.addEventListener("keydown", playSound);

function playSound(event) {

    switch (event.keyCode) {

        case 65:
            new Audio ("/src/sounds/clap.wav").play();
        break

        case 83:
            new Audio ("/src/sounds/hihat.wav").play();
        break
        
        case 68:
            new Audio ("/src/sounds/kick.wav").play();
        break
        
        case 70:
            new Audio ("/src/sounds/openhat.wav").play();
        break
        
        case 71:
            new Audio ("/src/sounds/boom.wav").play();
        break
        
        case 72:
            new Audio ("/src/sounds/ride.wav").play();
        break
        
        case 74:
            new Audio ("/src/sounds/snare.wav").play();
        break
        
        case 75:
            new Audio ("/src/sounds/tom.wav").play();
        break
        
        case 76:
            new Audio ("/src/sounds/tink.wav").play();
        
    }
};




