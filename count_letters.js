function countLetters(letters) {
  var count = {};
  for (var i = 0; i < letters.length; i++) {
    if (letters[i] !== ' ') {
      if (count[letters[i]] > 0){
        count[letters[i]].push(i);
      }
      else {
        var indicies = [i];
        count[letters[i]] = indicies;
      }
    }
  }
  return count;
}

console.log(countLetters("lighthouse in the house"));
