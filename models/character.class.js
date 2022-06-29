class Character extends MovableObject {
    x = 120;
    y = 80;
    World;
    width = 130;
    height = 240;
    speed = 10;
    IMAGES_WALKING = [
        './img/2_character_pepe/2_walk/W-21.png',
        './img/2_character_pepe/2_walk/W-22.png',
        './img/2_character_pepe/2_walk/W-23.png',
        './img/2_character_pepe/2_walk/W-24.png',
        './img/2_character_pepe/2_walk/W-25.png',
        './img/2_character_pepe/2_walk/W-26.png'
    ];

    walking_sound = new Audio('audio/running.mp3'); //Walking sound. The Mp3 file is not so good i need to look for a better one.


    constructor() {
        super().loadImage('./img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.applyGravity();
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.walking_sound.pause();
            if (this.World.keyboard.RIGHT && this.x < this.World.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
                this.walking_sound.play();
            }
            if (this.World.keyboard.LEFT && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.walking_sound.play();
            }
            this.World.camera_x = -this.x + 100;
        }, 1000 / 60);

        setInterval(() => {

            if (this.World.keyboard.RIGHT || this.World.keyboard.LEFT) {
                //Walk animation is in the MO Defined
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 50);
    }


    moveRight() {

    }


    jump() {

    }

}