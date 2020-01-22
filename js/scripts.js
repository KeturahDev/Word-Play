$(document).ready(function() {
  $('#formy').submit(function(event) {
    event.preventDefault();

    var originalArray = $('#sentence').val();
    console.log(originalArray);
    var wow = originalArray.split(' ');
    // var originalArray = $('#sentence').split(' ');

    // console.log("original Array",originalArray[1])
    console.log('wow',wow);

    var threeLetterArray = []
    threeLetterArray = wow.map(function(word) {
      word.length > 3 ? threeLetterArray.push(word) : null;
      return threeLetterArray;
      // word.length > 3 ? console.log('woopwoop!'): console.log('boooo');
      // return console.log(word.length) 
    });
      return console.log(threeLetterArray)

    // threeLetterArray();
  });
});