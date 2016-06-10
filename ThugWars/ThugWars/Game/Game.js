var main = main || {};

main.game = new Phaser.Game(800, 600, Phaser.AUTO, '');

main.game.state.add('Fight', fight);

main.game.state.start('Fight');