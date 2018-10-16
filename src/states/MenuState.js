let title = null;
let subtitle = null;
let gradient;
let gradient2;
export let music;
export default class MenuState extends Phaser.State {
  constructor() {
    super();
    console.log("In the MenuState");

  }

  create() {
    // Start Music
    music = this.game.add.audio("bgmusic", .3, true);
    music.play();

    this.game.stage.setBackgroundColor(0x000000);
    // Add Title
    title = this.add.text(1200, 500, "~ Oyster Hunt ~");
    title.anchor.setTo(0.5);
    title.font = 'Wendy One';
    title.fontSize = 200;
    gradient = title.context.createLinearGradient(0, 0, 0, 150);
    gradient.addColorStop(0, '#8ED6FF');
    gradient.addColorStop(1, '#004CB0');
    title.fill = gradient;
    title.align = 'center';
    title.setShadow(5, 5, '#8ED6FF', 5);
    // Add Subtitle
    subtitle = this.add.text(1200, 800,  "Tap to Begin!");
    subtitle.anchor.setTo(0.5);
    subtitle.font = 'Wendy One';
    subtitle.fontSize = 120;
    gradient2 = subtitle.context.createLinearGradient(0, 250, 0, 0);
    gradient2.addColorStop(0, '#8ED6FF');
    gradient2.addColorStop(1, '#004CB0');
    subtitle.fill = gradient2;
    subtitle.align = 'center';
  }

  update() {
     this.game.input.onDown.add(this.begin, this);

  }//End of update()

  begin() {
    this.state.start("Splash");
  }

}//End of MenuState Class
