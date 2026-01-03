/*Q1. Write a function that searches for an
element in an array and returns the index,
if the element is not present then just 
return -1*/
let array = [2, 3, 5, 7, 82, 1, 345, 6];
function searchElement(elem) {
  for (i = 0; i < array.length; i++) {
    if (array[i] == elem) {
      return i;
    }
  }
  console.log("function is been invoked");
  return -1;
}
let fnc = searchElement(9);
console.log(fnc);


// Q2. Write a function that returns the number of negative
// numbers in an array
let arr = [1, -2, 4, -5, -4, -5, 67, 8];
function negNum() {
  let negativeNum = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negativeNum += 1;
    }
  }
  console.log(negativeNum);
}
negNum(arr);

// Q3. Write a function that returns largest num in an array 

let arrayyy=[29,60,79,56,3,518]
let largestNum= arrayyy[0];
function findLargNum()
{
    
    for(i=0; i<arrayyy.length;i++){
       if(arrayyy[i]>largestNum){
        largestNum=arrayyy[i]
        
        
       }
    }
    console.log("And the largest number is :"+ largestNum)
}
findLargNum(arrayyy)


// Q4. Write a function that returns smallest num in an array 
function smallestNum(){
    let smallNum= arrayyy[0]
    for(i=0;i<arrayyy.length; i++){
        if(arrayyy[i]<smallNum){
            smallNum=arrayyy[i]
        }
    }
    console.log("And the Smallest number is :"+ smallNum)
}
smallestNum(arrayyy)