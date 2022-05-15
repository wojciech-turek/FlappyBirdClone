import BaseScene from "./BaseScene";

class ScoreScene extends BaseScene {
  constructor(config) {
    super("ScoreScene", { ...config, canGoBack: true });
  }

  create() {
    super.create();
    this.displayBestScore();
  }

  displayBestScore() {
    const bestScore = localStorage.getItem("bestScore");
    this.add
      .text(...this.screenCenter, `Best Score ${bestScore}`, {
        fontSize: "48px",
        color: "#fff",
      })
      .setOrigin(0.5, 1);
  }
}

export default ScoreScene;
