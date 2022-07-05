class Bottle extends MovableObject {

    height = 50;
    width = 50;
    x = 5;
    y = -400;
    IMAGES = [
        'img/6_salsa_bottle/salsa_bottle.png'
    ];


    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png');
        this.loadImages(this.IMAGES);
        this.x = Math.random() * 2500;
        this.y = Math.random() * 400;
        this.animate();
    }


    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 100);
    }
}