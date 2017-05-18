function genRandLetter(stringLength) {
  var text = [];
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < stringLength; i++) {
    text.push(possible.charAt(Math.floor(Math.random() * possible.length)));
  }

  return text;
}

export default genRandLetter;