var main = main || {};

main.game = new Phaser.Game(548, 299, Phaser.AUTO, '');

main.game.state.add('Fight', fight);

main.game.state.start('Fight');