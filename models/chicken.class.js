class Chicken extends MovableObject {
    height = 60;
    width = 40;
    y = 400;
    energy = 1;
    dead = false;
    otherDirection = false;
    character;

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];
    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ]

    //walking_sound = new Audio('audio/chicken.mp3');
    // currentImage = 0;    verschoben in MovableObject

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
            if (this.energy <= 0) { this.dead = true; }

            if (this.x <= -1200) { this.otherDirection = true; }

            if (this.x >= 3400) { this.otherDirection = false; }

            if (!this.dead) {
                if (this.otherDirection) { this.moveRight(); } else { this.moveLeft(); }
            }
        }, 1000 / 144);


        setInterval(() => {
            if (this.dead) {
                this.playAnimation(this.IMAGES_DEAD);

            } else {
                // this.walking_sound.play();
                this.playAnimation(this.IMAGES_WALKING);
            }

        }, 100);
    }
}



/*Old-MY*/
/*class Chicken extends MovableObject {
   
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
        this.x = 1000 + Math.random() * 500; // Number between 200 and 700
        this.loadImages(this.IMAGES_WALKING);
        this.speed = 0.1 + Math.random() * 0.5; // Random number for the speed of the chicken
        this.animate();
    }


    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60)

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 150);
    }

}
*/