let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    console.log('My Character is', world.character)
}


window.addEventListener('keydown', (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (e.keyCode == 38) {
        keyboard.UP = true;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (e.keyCode == 68) {
        keyboard.D = true;
    }
    console.log(e)
});


window.addEventListener('keyup', (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 38) {
        keyboard.UP = false;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (e.keyCode == 68) {
        keyboard.D = false;
    }
    console.log(e)
});

function showGameLose() {
    setTimeout(() => {
        document.getElementById('canvas').classList.add('d-none');
        document.getElementById('showEndScreen').classList.remove('d-none');
        document.getElementById('overline').classList.add('d-none');
        document.getElementById('removeGameOver').classList.add('d-none');
        document.getElementById('control-bar').classList.add('d-none');
    }, 1000);

}


function showGameWin() {
    setTimeout(() => {
        document.getElementById('canvas').classList.add('d-none');
        document.getElementById('showEndScreen').classList.remove('d-none');
        document.getElementById('overline').classList.add('d-none');
        document.getElementById('removeGameOver').classList.add('d-none');
        document.getElementById('control-bar').classList.add('d-none');
        document.getElementById('chanceImg').src = 'img/9_intro_outro_screens/pexels-nataliya-vaitkevich-6120398.jpg';
    }, 1000);
}


function showGame() {
    document.getElementById('removeScreen').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');
    document.getElementById('overline').classList.remove('d-none')
    alert('The game is in beta and not ready yet but feel free to try it out')
}


function showGameAgain() {
    window.location.reload();
}