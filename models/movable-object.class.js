class MovableObject {
    x = 120;
    y = 190;
    img;
    height = 100;
    width = 100;
    imageCache = {};


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    /**
     * Aus der class Character wir ein Array in die Funktion loadImages mit 6. Bildern von Pepe reingeben.
     * Dann definiere ich eine Variable img und weiße ihr das Objekt "new Image(); zu"
     * 
     * @param {Array} arr - ['img/image1.png', 'img/image2.png'] 
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });

    }


    moveRight() {
        console.log('Move right')
    }


    moveLeft() {

    }

}