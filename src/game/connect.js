function connectToServer() {
	socket = io.connect("http://localhost:3000");
    socket.on('ack', function (message) {
        console.log(message.data);
        socket.emit('connect-player', {username: 'tediris'});
    });

    socket.on('player-id', function (data) {
    	playerID = data.idNumber;
    	console.log('player added to server, starting...');
    	userPlayer = new Player(game, game.world.centerX, game.world.centerY, playerID);
    	connected = true;
    });

    socket.on('server-update', function (playerList) {
    	console.log(playerList.data);
    	if (!connected) return;

    	for (var i = 0; i < playerList.length; i++) {
    		//console.log(playerList[i]);
    		if (playerList[i].idNumber == playerID) continue;
    		if (typeof otherPlayers["" + playerList[i].idNumber] === "undefined") {
    			// create new player
    			console.log("created new player");
    			otherPlayers["" + playerList[i].idNumber] = new OtherPlayer(game, 0, 0, playerList[i].idNumber);
    			console.log(otherPlayers);
    		}
    		otherPlayers["" + playerList[i].idNumber].updatePosition(playerList[i].x, playerList[i].y);
    	}
    });
}