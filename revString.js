// Q. reverse the array of strigs

let str=["o","l","l","e","H"]
let len=str.length;
let halfLen=Math.floor(len/2);
(function(str){
    

    for(i=0;i<halfLen;i++){
  let temp=str[i];
  str[i]=str[len-1-i]
  str[len-1-i]=temp
    }
    console.log(str)
}(str) )


// Q. practice

let arr= ['r','i','h','s','s','a','b','o','M'];

(function(arr){
    let lenOfarr=arr.length;
    let half=Math.floor(lenOfarr/2)
for(i=0;i<half;i++){
    let temporary=arr[i];
    arr[i]=arr[lenOfarr-1-i]
    arr[lenOfarr-1-i]=temporary;
}
console.log(arr)
}(arr))

// Q. Practice

let stri="rihssaboM"
let mod=stri.split('').reverse().join('')
console.log(mod)