$(document).ready(function() {
  $('#formy').submit(function(event) {
    event.preventDefault();

    var stuff = $('#sentence').val();
    console.log(stuff);
    var words = stuff.split(' ');
    console.log(words)


    var threeLetterArray = [];
    for (var index = 0; index <= words.length-1; index += 1) {
  
      if(words[index].length >= 3) {
        threeLetterArray.push(words[index]);
      }
      
    }


    // words.forEach(function(word) {
    //   if(word.length >= 3) {
    //     threeLetterArray.push(word);
    //   }
     
      
    // });
    console.log(threeLetterArray)




    // // var originalArray = $('#sentence').split(' ');

    // // console.log("original Array",originalArray[1])
    // console.log('wow',wow);

    // var threeLetterArray = []
    // threeLetterArray = wow.map(function(word) {
    //   word.length > 3 ? threeLetterArray.push(word) : null;
      
    //   return threeLetterArray;
    //   // word.length > 3 ? console.log('woopwoop!'): console.log('boooo');
    //   // return console.log(word.length) 
    
     
  });
});