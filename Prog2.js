var matrix = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
];

var matrix_value = matrix.length;

var side = 20;
var grassArr = [];
var eaterArr = [];
var toxicGrassArr = [];
var WolfArr = [];
var WaterArr = [];

function generator() {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix_value; x++) {
      matrix[y].push(Math.round(Math.random() * 4));
    }
  }
}

function WaterGenerator() {
  for (let i = 0; i < Math.round(matrix.length / 10); i++) {
    let randX = Math.round(Math.random() * matrix.length);
    let randY = Math.round(Math.random() * matrix.length);
    WaterArr.push(new Water(randX, randY));
    matrix[randY][randX] = 5;
  }
}

function setup() {
  frameRate(10);
  generator();
  WaterGenerator();
  createCanvas(matrix[0].length * side, matrix.length * side);
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        grassArr.push(new Grass(x, y));
      } else if (matrix[y][x] == 2) {
        eaterArr.push(new Eater(x, y));
      } else if (matrix[y][x] == 3) {
        toxicGrassArr.push(new ToxicGrass(x, y));
      } else if (matrix[y][x] == 4) {
        WolfArr.push(new Wolf(x, y));
      } else if (matrix[y][x] == 5) {
        WaterArr.push(new Water(x, y));
      }
    }
  }
}

function draw() {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        fill("green");
      } else if (matrix[y][x] == 2) {
        fill("yellow");
      } else if (matrix[y][x] == 3) {
        fill("black");
      } else if (matrix[y][x] == 4) {
        fill("red");
      } else if (matrix[y][x] == 5) {
        fill("blue");
      } else if (matrix[y][x] == 6) {
        fill("green");
      } else {
        fill("grey");
      }
      rect(x * side, y * side, side, side);
    }
  }

  //console.log(matrix);
  for (var i in grassArr) {
    grassArr[i].mul();
    //console.log(grassArr);
  }
  for (var i in eaterArr) {
    eaterArr[i].eat();

    //eaterArr[i].checkDie();
    //console.log(eaterArr);
    //console.log(eaterArr[i]);
  }
  for (var i in WolfArr) {
    WolfArr[i].eat();
    //WolfArr[i].checkDie();
  }
  console.log("grassArr = ", grassArr);
  console.log("eaterArr = ", eaterArr);
  console.log("WolfArr = ", WolfArr);
  console.log("matrix = ", matrix);
}
