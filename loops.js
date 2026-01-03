/* Write a function that searches for an
element in an array and returns the index,
if the element is not present then just 
return -1*/
let arr= [2,3,5,7,82,1,345,6]
function searchElement(elem){
for(i=0; i<arr.length;i++){
   if(arr[i]==elem){
    return i
   }
}
console.log("function is been invoked");
return -1;

}
let fnc= searchElement(9);
console.log(fnc);

