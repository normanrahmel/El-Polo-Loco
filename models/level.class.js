class Level {
    enemies;

    clouds;

    backgroundObjects;

    coins;

    bottle;

    level_end_x = 2200;

    /**
     * transfers all values ​​of the levels to the variable
     * 
     * @param {*} enemies  
     * @param {*} clouds 
     * @param {*} backgroundObjects 
     * @param {*} bottle
     * @param {*} coins 
     */

    constructor(enemies, clouds, backgroundObjects, coins, bottle) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.bottle = bottle;
    }
}