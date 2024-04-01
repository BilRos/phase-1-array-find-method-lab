// code your solution here

/*
function isOdd(element, index, array) {
    return (element % 2 === 1);
  }
  
  [4, 6, 8, 10].find(isOdd); //=> undefined, not found
  [4, 5, 8, 10].find(isOdd); //=> 5
  [4, 5, 7, 8, 10].find(isOdd); //=> 5
  [4, 7, 5,  8, 10].find(isOdd); //=> 7
  
*/


const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"}
]

function superbowlWin(array){
    
   for (const obj in array){
    if(obj.result === "W"){
    console.log(obj.year);
    }
    else {
        return "sadly", undefined ;
    }
   } 
}
superbowlWin(record)

