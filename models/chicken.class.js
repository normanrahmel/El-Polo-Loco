class Chicken extends MovableObject {

    x = 120;
    y = 350;
    height = 80;
    width = 80;
    IMAGES_WALKING = [
        './img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        './img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        './img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];


    constructor() {
        super().loadImage('./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png')
        this.x = 200 + Math.random() * 500; // Number between 200 and 700
        this.loadImages(this.IMAGES_WALKING);
        this.speed = 0.15 + Math.random() * 0.5; // Random number for the speed of the chicken
        this.animate();
    }


    animate() {
        this.moveLeft();
        setInterval(() => {
            let i = this.currenImage % this.IMAGES_WALKING.length; // let i = 0 REST 6; i = 0, 1, 2, 3, 4, 5, 0
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currenImage++;
        }, 150);
    }

}