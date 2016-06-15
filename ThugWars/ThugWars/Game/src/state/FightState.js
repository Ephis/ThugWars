var fight = function(game) {
    this.game = game;
}

fight.prototype = {
    
    preload: function () {

        this.game.scale.maxWidth = 1300;
        this.game.scale.maxHeight = 800;

        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.stage.backgroundColor = '#eee';
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;

        this.load.image('background', '/Game/assets/backgrounds/doom_room.png');

    },

    create: function() {
        this.game.add.tileSprite(0, 0, 548, 299, 'background');
    },

    update: function() {
        
    }
}