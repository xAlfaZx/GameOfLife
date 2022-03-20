class Eater extends LeavingCreator {
  constructor(x, y) {
    super(x, y);
    this.energy = 5;
  }

  GetNewCoordinates() {
    this.directions = [
      [this.x - 1, this.y - 1],
      [this.x, this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x - 1, this.y],
      [this.x + 1, this.y],
      [this.x - 1, this.y + 1],
      [this.x, this.y + 1],
      [this.x + 1, this.y + 1],
    ];
  }

  mul() {
    let newChar2 = random(this.chooseCharacter(0)); // azat taracq

    if (newChar2) {
      var newEater = new Eater(newChar2[0], newChar2[1]);
      eaterArr.push(newEater);
      matrix[newChar2[1]][newChar2[0]] = 2;
      this.energy = 5;
    }
  }

  eat() {
    //this.GetNewCoordinates();
    var newEat21 = random(this.chooseCharacter(1)); // xoter
    //var newEat22 = random(this.chooseCharacter(2));         // xotaker
    //var newEat23 = random(this.chooseCharacter(3));         // tunavor xot

    if (newEat21) {
      this.energy++;
      matrix[this.y][this.x] = 0;
      this.x = newEat21[0];
      this.y = newEat21[1];
      matrix[this.y][this.x] = 2;
      for (var i in grassArr) {
        if (grassArr[i].y == this.y && grassArr[i].x == this.x) {
          grassArr.splice(i, 1);
          break;
        }
      }

      if (this.energy == 10) {
        this.energy = 5;
        this.mul();
      }
    } else {
      /*
        else if (newEat22) {
            this.energy += 2;
            matrix[this.y][this.x] = 0;
            this.x = newEat22[0];
            this.y = newEat22[1];
            matrix[this.y][this.x] = 4;
            for (var i in eaterArr) {
                if (eaterArr[i].y == this.y && eaterArr[i].x == this.x) {
                    eaterArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy == 10) {
                this.energy = 5;
                this.mul();
            }
        }

        else if (newEat23) {

            matrix[this.y][this.x] = 0;
            this.x = newEat23[0];
            this.y = newEat23[1];
            matrix[this.y][this.x] = 2;
            this.die();
            for (var i in toxicGrassArr) {
                if (toxicGrassArr[i].y == this.y && toxicGrassArr[i].x == this.x) {
                    toxicGrassArr.splice(i, 1);
                    break;
                }
            }


        }
        */
      this.move();

      if (this.energy <= 0) {
        this.die();
      }
    }
  }

  move() {
    //this.GetNewCoordinates();
    var newMove2 = random(this.chooseCharacter(0));
    this.energy--;

    if (this.energy > 0 && newMove2) {
      matrix[this.y][this.x] = 0;
      this.x = newMove2[0];
      this.y = newMove2[1];
      matrix[this.y][this.x] = 2;
    }
  }

  die() {
    for (let i = 0; i < eaterArr.length; i++) {
      if (eaterArr[i].x == this.x && eaterArr[i].y == this.y) {
        eaterArr.splice(i, 1);
      }
    }
    matrix[this.y][this.x] = 0;
  }
}
