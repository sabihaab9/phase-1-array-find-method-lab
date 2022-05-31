//Array.prototype.find()

// The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned. 
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"}
  ]


 function superBowlWin(record){
  const firstWin = record.find(element => element == 'W');
  
 }


console.log(firstWin);
