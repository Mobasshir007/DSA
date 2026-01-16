// Reverse number even if it is negative

function reverse(n){
let reverse =0;
let numCopy=n;
n=Math.abs(n)
while(n>0){
    remainder= n%10;
    reverse=(10*reverse)+remainder;
    n=Math.floor(n/10)
}
return (numCopy<0) ? -reverse :reverse;
}
console.log(reverse(-123))