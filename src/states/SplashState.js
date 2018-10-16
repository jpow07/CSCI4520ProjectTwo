import {GameStats} from "../Helper.js"
import {music} from "./MenuState.js"

let headerOne = null;
let message = null;
let playMessage = null;
let gradient;
let gradient2;

export default class SplashState extends Phaser.State {
  constructor() {
    super();
    console.log("In the MenuState");

  }

  create() {

    this.game.stage.setBackgroundColor(0x000000);
    // Add Title
    headerOne = this.add.text(this.world.centerX, 250);
    headerOne.anchor.setTo(0.5);
    headerOne.font = 'Wendy One';
    headerOne.fontSize = 200;
    //headerOne.setText("Norwalk Connecticut\n")
    gradient = headerOne.context.createLinearGradient(0, 0, 0, 150);
    gradient.addColorStop(0, '#8ED6FF');
    gradient.addColorStop(1, '#004CB0');
    headerOne.fill = gradient;
    headerOne.align = 'center';
    headerOne.setShadow(5, 5, '#8ED6FF', 5);


    // Message
    message = this.add.text(1200, 500);
    message.anchor.setTo(0.5);
    message.font = 'Indie Flower';
    message.fontSize = 70;
    gradient = message.context.createLinearGradient(0, 0, 0, 150);
    gradient.addColorStop(0, '#8ED6FF');
    gradient.addColorStop(1, '#004CB0');
    message.fill = "blue";
    message.align = 'center';
    // headerTwo.setShadow(5, 5, '#8ED6FF', 5);

    // Instruction to continue
    playMessage = this.add.text(2050, 1000);
    playMessage.anchor.setTo(0.5);
    playMessage.font = 'Wendy One';
    playMessage.fontSize = 80;
    gradient2 = playMessage.context.createLinearGradient(0, 250, 0, 0);
    gradient2.addColorStop(0, '#8ED6FF');
    gradient2.addColorStop(1, '#004CB0');
    playMessage.fill = gradient2;
    playMessage.align = 'center';

     if(!GameStats.isFinished){

       message.setText("Dating back to 1874, Oyster Cultivation was the leading industry\n in Norwalk Connecticut. It led to Norwalk Connecticut being nicknamed\n the Oyster Town. Each year they celebrate the Norwalk Oyster Festival\n This years festival is coming up. So lets go Harvest some Oysters!!");
       playMessage.setText("Tap to Continue!");
       this.game.input.onDown.add(this.beginPlayState, this);
     }
     if (GameStats.isFinished) {
       // this.game.time.events.add(Phaser.Timer.SECOND, this.endMessage, this);
       console.log("Game Over, You win");
       message.setText("Congratulations on another Successful harvest.\n This years Oyster Festival is going to be the talk of the town!\n")
       playMessage.setText("Tap to Continue!");
       this.game.input.onDown.add(this.beginMenuState, this);
     }
  }

  update() {

  }//End of update()

  beginPlayState() {
    this.state.start("PlayState", true, false);
  }
  beginMenuState() {
    GameStats.isFinished = false;
    GameStats.oystersCollected = 0;
    GameStats.weight = 0;
    GameStats.FishCollected = 0;
    music.stop();
    this.state.start("MenuState", true, false);

  }

}//End of MenuState Class
