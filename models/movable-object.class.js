class MovableObject {
    x = 120;
    y = 190;
    img;
    height = 100;
    width = 100;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    moveRight() {
        console.log('Move right')
    }


    moveLeft() {

    }

}