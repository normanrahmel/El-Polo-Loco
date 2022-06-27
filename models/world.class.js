class World {

    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];

    clouds = [
        new Cloud()
    ];

    backgroundObjects = [
        new backgroundObjects('img/5_background/complete_background.png')
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

        //Sets the Character 
        this.addToMap(this.character);

        //Sets the Chicken 
        this.enemies.forEach(enemy => {
            this.addToMap(enemy);
        });

        //Sets the Clouds  
        this.clouds.forEach(cloud => {
            this.addToMap(cloud);
        });

        //Sets the Background  
        this.backgroundObjects.forEach(bgo => {
            this.addToMap(bgo);
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


    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.height, mo.width);
    }
}