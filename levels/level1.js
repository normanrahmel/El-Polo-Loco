const level1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Endboss()
    ], [
        new Cloud()
    ], [
        new backgroundObjects('img/5_background/layers/air.png', -1438),
        new backgroundObjects('img/5_background/layers/3_third_layer/1.png', -1438),
        new backgroundObjects('img/5_background/layers/2_second_layer/1.png', -1438),
        new backgroundObjects('img/5_background/layers/1_first_layer/1.png', -1438),

        new backgroundObjects('img/5_background/layers/air.png', -719),
        new backgroundObjects('img/5_background/layers/3_third_layer/2.png', -719),
        new backgroundObjects('img/5_background/layers/2_second_layer/2.png', -719),
        new backgroundObjects('img/5_background/layers/1_first_layer/2.png', -719),

        new backgroundObjects('img/5_background/layers/air.png', 0),
        new backgroundObjects('img/5_background/layers/3_third_layer/1.png', 0),
        new backgroundObjects('img/5_background/layers/2_second_layer/1.png', 0),
        new backgroundObjects('img/5_background/layers/1_first_layer/1.png', 0),

        new backgroundObjects('img/5_background/layers/air.png', 719),
        new backgroundObjects('img/5_background/layers/3_third_layer/2.png', 719),
        new backgroundObjects('img/5_background/layers/2_second_layer/2.png', 719),
        new backgroundObjects('img/5_background/layers/1_first_layer/2.png', 719),

        new backgroundObjects('img/5_background/layers/air.png', 719 * 2),
        new backgroundObjects('img/5_background/layers/3_third_layer/1.png', 719 * 2),
        new backgroundObjects('img/5_background/layers/2_second_layer/1.png', 719 * 2),
        new backgroundObjects('img/5_background/layers/1_first_layer/1.png', 719 * 2),

        new backgroundObjects('img/5_background/layers/air.png', 719 * 3),
        new backgroundObjects('img/5_background/layers/3_third_layer/2.png', 719 * 3),
        new backgroundObjects('img/5_background/layers/2_second_layer/2.png', 719 * 3),
        new backgroundObjects('img/5_background/layers/1_first_layer/2.png', 719 * 3),

    ]);

function showGame() {
    document.getElementById('removeScreen').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');
    document.getElementById('overline').classList.remove('d-none')
}