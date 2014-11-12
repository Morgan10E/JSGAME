OtherPlayer = function (game, x, y, idNumber) {
	Phaser.Sprite.call(this, game, x, y, 'wizard');
	this.idNumber = idNumber;

	game.physics.arcade.enable(this); // might want to manully do this to group

	this.scale.setTo(4, 4);
	this.anchor.setTo(0.5, 0.5);
	this.body.allowRotation = false;
	
	game.add.existing(this);
};


OtherPlayer.prototype = Object.create(Phaser.Sprite.prototype);
OtherPlayer.prototype.constructor = OtherPlayer;

OtherPlayer.prototype.updatePosition = function(x, y) {
	var outString = "moving to position " + x + ", " + y;
	//console.log(outString);
	game.physics.arcade.moveToXY(this, x, y, 10, Phaser.Timer.SECOND);
};