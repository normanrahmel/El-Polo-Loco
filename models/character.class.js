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
    IMAGES_JUMPING = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png'

    ];
    IMAGES_DEAD = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png'
    ];
    IMAGES_HURT = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png'
    ];

    walking_sound = new Audio('audio/running.mp3'); //Walking sound. The Mp3 file is not so good i need to look for a better one.
    playJumpSound = new Audio('audio/jump.mp3');
    bottels = 0;
    coins = 0;



    constructor() {
        super().loadImage('./img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.applyGravity();
        this.animate();
    }


    animate() {
        setInterval(() => {
            this.walking_sound.pause();
            if (this.World.keyboard.RIGHT && this.x < this.World.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
                this.walking_sound.play();
            }
            if (this.World.keyboard.LEFT && this.x > 0) {
                this.moveLeft();
                this.otherDirection = true;
                this.walking_sound.play();
            }
            if (this.World.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
            }

            this.World.camera_x = -this.x + 100;
        }, 1000 / 60);

        let i = 0;
        setInterval(() => {
            if (this.isDead() && i < 5) {
                this.playAnimation(this.IMAGES_DEAD);
                i++;
                this.walking_sound.pause();
            } else if (this.isDead() && i >= 5) {
                this.loadImage('img/2_character_pepe/5_dead/D-57.png');
                showGameLose();
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            } else if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            } else {
                if (this.World.keyboard.RIGHT || this.World.keyboard.LEFT) {
                    //Walk animation is in the MO Defined
                    this.playAnimation(this.IMAGES_WALKING);
                }
            }
        }, 50);
    }


    jump() {
        this.speedY = 30;
        this.playJumpSound.play();
    }

}