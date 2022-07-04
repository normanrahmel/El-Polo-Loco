class Coin extends MovableObject {

    collected = false;
    height = 50;
    width = 50;
    x = 5;
    y = 150;
    IMAGES = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png'
    ];


    constructor(x, y) {
        super().loadImage('img/8_coin/coin_2.png');
        x = Math.random() * 500;
        this.loadImages(this.IMAGES);
        this.animate();
    }


    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 100);
    }
}