class Chicken extends MovableObject {

    x = 120;
    y = 350;
    height = 80;
    width = 80;

    constructor() {
        super().loadImage('./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png')
        this.x = 200 + Math.random() * 500; // Number between 200 and 700
    }
}