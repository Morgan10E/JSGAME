function create(){
    // State create logic goes here
    // TileSprite - used for sprites with a repeating texture. By default, no
    // physics are enabled
    game.add.tileSprite(0, 0, 1920, 1920, 'grid');

    game.world.setBounds(0, 0, 1920, 1920);

    // Instantiate P2 physics system, more advanced than arcade
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // userPlayer = new Player(game, game.world.centerX, game.world.centerY, playerID);
    connectToServer();
}