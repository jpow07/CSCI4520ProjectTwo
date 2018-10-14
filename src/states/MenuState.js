let text, grd, music;
export default class MenuState extends Phaser.State {
  constructor() {
    super();
    console.log("In the MenuState");

  }

  create() {
    // Start Music
    music = this.game.add.audio("bgmusic", 1, true);
    music.play();




  }

  update() {
     this.game.input.onDown.add(this.begin, this);

  }//End of update()

  createText() {

    text = this.game.add.text(game.world.centerX, game.world.centerY, "Oystervation");
    text.anchor.setTo(0.5);

    text.font = 'Veranda';
    text.fontSize = 60;

    //  x0, y0 - x1, y1
    grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
    grd.addColorStop(0, '#8ED6FF');
    grd.addColorStop(1, '#004CB3');
    text.fill = grd;

    text.align = 'center';
    text.stroke = '#000000';
    text.strokeThickness = 2;
    text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

  }

  begin() {
    this.state.start("PlayState");
  }

}//End of MenuState Class
