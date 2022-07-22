class Chicken extends MovableObject {
    height = 70;
    width = 60;
    y = 400;
    energy = 1;
    dead = false;
    otherDirection = false;
    character;
    deadSound = new Audio('audio/dead.mp3');


    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];

    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ]


    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');

        this.x = -1100 + Math.random() * 3300; // Math.random() gibt eine zufällige Zahl zwischen 0 und 1 aus
        this.y = 420 - this.height // y-position - Bildhöhe, da von ober gezählt wird

        this.speed = 0.05 + Math.random() * 0.6; // min. 0.05 + max. 0.15 = max.randomSpeed 0.2

        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.energy <= 0) {
                this.dead = true;
            }

            if (this.x <= -1200) {
                this.otherDirection = true;
            }

            if (this.x >= 3400) {
                this.otherDirection = false;
            }

            if (!this.dead) {
                this.walkingSoundBoolean = true;
                if (this.otherDirection) {
                    this.moveRight();
                } else {
                    this.moveLeft();
                }
            }
        }, 1000 / 144);


        setInterval(() => {
            if (this.dead) {
                this.playAnimation(this.IMAGES_DEAD);
                this.deadSound.play();
                setTimeout(() => {
                    this.height = 0;
                    this.width = 0;
                    this.x = 5000;
                    this.deadSound.pause();
                    this.walking_sound.pause();
                }, 2000);

            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 100);
    }
}