// Find the second largest number in an array
let arr = [2, 4, 55, 776, 300, 5];
let largestNum = -Infinity;
let secLargeNum = -Infinity;

function secondLargest(arr) {
  for(i=0; i<arr.length; i++){
    if(arr[i]>largestNum){
        secLargeNum=largestNum;
        largestNum=arr[i]
    }else if(arr[i]>secLargeNum){
        secLargeNum=arr[i]
    }
  }
   console.log("second largest number is :"+secLargeNum)
    console.log("Largest Number is :"+ largestNum)
}

secondLargest(arr);
