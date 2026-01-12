// Count the number of digits in any number

function CountFunc(num) {
  let count = 0;
  num=Math.abs(num)// Math.abs() is used to convert negative number into positive. 
  
  if (num == 0) return 1;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}
let cnt = CountFunc(-21);
console.log(cnt);
