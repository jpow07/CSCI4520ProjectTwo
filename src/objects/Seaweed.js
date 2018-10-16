let animation;
export default class Seaweed extends Phaser.Sprite {


  constructor({game, x, y, asset}) {
    super(game, x, y, asset);
    this.create();
  }

  create() {

    animation = this.animations.add('seaweed', [0,1,2], 4, true);
    this.enableBody = true;
    this.physicsBodyType = Phaser.Physics.ARCADE;
    this.scale.setTo(2, 2);
    // this.game.physics.enable(this, Phaser.Physics.ARCADE);

    animation.play();
  }

  update() {
  }


}
