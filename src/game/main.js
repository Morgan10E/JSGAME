/**
 *
 * Starting point for game code, creates a game object with the
 * functions defined in the other files
 *
 */

var game = new Phaser.Game(
    800,
    480,
    Phaser.AUTO,
    'game',
    {init: init, create: create, update: update, preload: preload, render: render}
);