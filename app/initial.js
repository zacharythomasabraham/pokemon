// Initialize Phaser, and create a 800x480px game
var game = new Phaser.Game(800, 480, Phaser.AUTO, 'gameContainer');

// Create our 'main' state that will contain the game
var mainState = {

    preload: function() {
    	// called once after beginning - the best place to load images
    },

    create: function() {
      	// called once after beginning, later than preload
      	// here we initialize all objects that are needed at the start of the game
    },
     
    update: function() {
		// called 30 times per second
    }

};

// Add and start the 'main' state to start the game
game.state.add('main', mainState);
game.state.start('main');
