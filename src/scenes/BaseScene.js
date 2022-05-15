import Phaser from "phaser";

class BaseScene extends Phaser.Scene {
  constructor(key, config) {
    super(key);
    this.config = config;
    this.screenCenter = [config.width / 2, config.height / 2];
    this.fontSize = 32;
    this.menuGap = 42;
    this.fontOptions = { fontSize: `${this.fontSize}px`, fill: "#fff" };
  }

  create() {
    this.createBackground();
    if (this.config.canGoBack) {
      this.displayBackButton();
    }
  }

  createBackground() {
    this.add.image(0, 0, "background").setOrigin(0, 0);
  }

  createMenu(menu, setupMenuEvents) {
    let lastMenuPostionY = 0;
    menu.forEach((menuItem) => {
      const menuPosition = [
        this.screenCenter[0],
        this.screenCenter[1] + lastMenuPostionY,
      ];
      menuItem.textGO = this.add
        .text(...menuPosition, menuItem.text, this.fontOptions)

        .setOrigin(0.5, 1);
      lastMenuPostionY += this.menuGap;
      setupMenuEvents(menuItem);
    });
  }
  displayBackButton() {
    const backButton = this.add
      .image(20, 20, "back")
      .setOrigin(0, 0)
      .setScale(2);
    backButton.setInteractive();
    backButton.on("pointerup", () => this.handleBackButtonClick());
  }

  handleBackButtonClick() {
    this.scene.start("MenuScene");
  }
}

export default BaseScene;
