/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
  var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess;
    
  while(min <= max){
    guess = Math.round((min + max)/2);

    if(array[guess] === targetValue){
      return guess;
    }
    if (array[guess] < targetValue) {
      min = guess + 1;
    } else {
      max = guess -1;
    }
  }
  
  return -1;
};



doSearch([22, 44, 66, 88], 88)
doSearch([99,100],101)