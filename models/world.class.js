class World {

    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];

    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }



    draw() {
        //Deletes the object each time the draw function is called
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.height, this.character.width);

        this.enemies.forEach(enemy => {
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.height, enemy.width);
        });

        /**
         * this. is no longer detected in the requestAnimationFrame
         * With requestAnimationFrame the draw method is called as often as the graphics card allows it
         */
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }
}