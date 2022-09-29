function pushDominoes(dominoes) {
  dominoes = dominoes.split("");
  var start = 0;
  var last = {
    pos: null,
    data: null,
  };
  for (let i = 0; i < dominoes.length; i++) {
    var iL = dominoes.indexOf("L", start);
    var iR = dominoes.indexOf("R", start);

    if (iL < iR) {
      // left sob l
      for (let j = 0; j < dominoes.slice(start, iL).length; j++) {
        dominoes[i] = "L";
        i++;
      }
      start = iL + 1;
      last.pos = iL + 1;
      last.data = "L";
    }
    if (iR < iL) {
      var x = dominoes.slice(iR, iL+1);
      for (let k = 0; k < x.length; k++) {
        if (x[k] === ".") {
          let a = Math.floor(x.length / 2);
          if(a%2){
            for (let l = 0; l < a; l++) {
              dominoes[i] = "R";
              i++;
            }
            for (let m = a + 1; m < x.length; m++) {
              dominoes[i] = "L";
              i++;
            }
          }else{

          }
          
        }else{
          dominoes[i] = "R";
        }
      }
      start = iL + 1;
      last.pos = iL + 1;
      last.data = "L";
    }
  }

  console.log(dominoes.join(""));
}
pushDominoes(".L.R...LR..L..");

/**
 *
 *
 * prothom l/r
 * l hole left sob l jodi thake
 * r hole left ager sob . jodi thake
 * prothom tar pos type save next find
 *
 * now l & next l hole sob l
 * now l and next r hole next pos er ag porjonto sob . jodi thake
 * pos type save next find
 *
 * now r and next l hole find center if center then center . and othrwise rl
 * now r next r hole rr
 * pos type save next find
 *
 * next na pele .
 */

pushDominoes(".L.R...LR..L..");
