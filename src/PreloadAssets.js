

class PreloadAssets {

  preload() {
    game.load.image("sky", "assets/images/sky.png");
    game.load.image("platform", "assets/images/platform.png");
    game.load.image("star", "assets/images/star.png");
    game.load.spritesheet("murph", "assets/images/character.png", 32,48);

  }

  create() {
    game.state.start("Game");

  }


}
