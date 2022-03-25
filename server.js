//առաջին 10 տողը նույնությամբ գրիր, որպեսզի լոկալհոստ ունենաս
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

var grassArr = [];
var eaterArr = [];
var toxicGrassArr = [];
var WolfArr = [];
var WaterArr = [];
//10

//քո սկրիպտ ֆայլից տպի մատրիցդ գեներացնոլու հատվածը և դատարկ զանգվածը
// ինձ մոտ այն չի գեներացվում,,,քեզ մոտ լաաաավ կլինի , որ գեներացվի

var matrix = [
  [],[],[],[],[],[],
  [],[],[],[],[],[],
  [],[],[],[],[],[],
  [],[],[],[],[],[],
  [],[],[],[],[],[],
  [],[],[],[],[],[],
  [],[],[],[],[],[],
  [],[],[],[],[],[],
];

Grass = require("./Grass")
Eater = require("./Eater")
ToxicGrass = require("./ToxicGrass")
Water = require("./Water")
Wolf = require("./Wolf")

function generator() {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix_value; x++) {
      matrix[y].push(Math.round(Math.random() * 4));
    }
  }
}

io.sockets.emit('generator', matrix)

//այստեղ քո պատրաստի թվերով լցված զանգվածը ուղարկում ես կլիենտին:
//սոքեթի emit մեթոդը թույլ է տալիս առաջին արգումենտով ստեղծել իվենթի անունը,
//2-րդ արգումենտով ուղղարկել տվյալը, այն ինչ ուզում ես ուղարկել

// հիմա գնա կլիենտի ֆայլ

//.........................................լոադինգ

//եթե գնացիր ու ամենինչ գրեցիր, արի էստեղ, դեռ անելիք ունենք

//էստեղ բեր քո գազանիկների դատարկ զանգվածները


    //քանի որ քո կլասս-երը արդեն մոդուլներ են և ոչ մի կապ չունեն html ֆայլիդ հետ՝
    //այլ աշխատում են սերվերի վրա:
    //Դու պետք է նրանց իմպորտ անես: Ինձ մոտ նրանք երկուսն են, քեզ մոտ ավելի շատ
     Grass = require("../../Downloads/third 1/Grass")
     GrassEater = require("../../Downloads/third 1/GrassEater")

    //Այժմ լցնենք մատրիցը օբյեկտներով
    //սարքի մի հատ ֆունկցիա օրինակ createObject անունով
    //և էստեղ բեր քո սկրիպտ ֆայլի օբյեկտներով լցնող հատվածը
    function createObject(matrix) {
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
        // և կրկին ուղարկի կլիենտիդ:
        //չմոռանաս , որ emit-ը տվյալ ուղարկողն է, իսկ on-ը ստացողը և կատարողը
        //այս դեպքում 2-րդ արգումենտը տվյալն է
        io.sockets.emit('send matrix', matrix)


    }


    //հիմա անցնենք նրանց վայրենի գործունեությանը
    //որևէ անունով կոչիր ֆունկցիադ և մեջը դիր մեթոդների հատվածը:

    function game() {
        for (var i in grassArr) {
            grassArr[i].mul()
        }
        for (var i in grassEaterArr) {
            grassEaterArr[i].eat();
        }
        //այո, դու ճիշտ ես տեսնում, կրկին և կրկին
        io.sockets.emit("send matrix", matrix);
    }

    //մեր խաղի շարժը լինելու է 1 վարկյանը մեկ
    setInterval(game, 1000)



      // մինչև այժմ մենք ինքներս էինք դնում իվենթների անուննները,
      //օրինակ send matrix կամ ըըը... էլ չկա :D
      // էստեղ connection պատրասի իվենթի անուն է, որը աշխատում է այն ժամանակ,
      //երբ որևէ մեկը աշխատացնում է սերվերը՝ մտնում է սերվեր
      //և մենք դեռ չէինք կանչել createObject ֆունկցիան
      // էստեղ կկանչենք )))
io.on('connection', function (socket) {
    createObject(matrix)
})

//դե ինչ այսօր այսքանը:

//ինձ համար շատ կարևոր է , որ հենց դու շատ լավ հասկանաս էս
//ամենը ու լինես լավագույնը քո ընտրած ոլորտում:



//Գիտեմ, որ լիիիիիքը սխալ կա մեջը: Դուք ճիշտը գրեք :PPPPP
