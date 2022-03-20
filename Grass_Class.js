class Grass extends LeavingCreator {
  mul() {
    this.GodeMode();
    this.energy++;
    var newCell = random(this.chooseCell(0));
    if (this.energy >= 3 && newCell) {
      const newGrass = new Grass(newCell[0], newCell[1]);
      grassArr.push(newGrass);
      matrix[newCell[1]][newCell[0]] = 1;
      this.energy = 0;
    }
  }

  GodeMode() {
    var WaterCord = random(this.chooseCell(5));

    if (WaterCord) {
      matrix[this.y][this.x] = 6;
    }
  }
}
