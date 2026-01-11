/* Q1. Print following pattern
*
**
***
****
*****
*/
let n = 5;

for(i=0; i<n; i++){
    let row = ""
    for(j=0; j<=i; j++){
        row += "*"
    }
   console.log(row)
}

/* Q2. print following pattern :
1
12
123
1234
12345
 */

for(i=0; i<n; i++){
   let row2= "";
    for(j=0; j<=i; j++){
       row2 +=( j+1 )
       
    }
    console.log(row2)
    
}
/* Q3. print following pattern :
1
10
101
1010
10101
 */
let res= ""
for(i=1;i<n; i++){

res += i%2
console.log(res)
 }

/* Q4. print following pattern :
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
*/

for(i=0;i<n;i++){
    let ne=" "
    for(j=0;j<=i; j++){
       ne +=i+1
    }
console.log(ne);
}

// Q5.
// 1
// 12
// 123
// 1234
// 12345
for(i=0;i<n; i++)
{
    let upd=" ";
    for(j=0; j<=i;j++){
    upd += j+1

    }
    console.log(upd)
}

/*Q6. 
5
44
333
2222
11111
 */
for(i=n; i>0;i--){
    let up=""
    for(j=0; j<=n-i;j++){
        up +=i
    }
    console.log(up)
}
/*
Q7. 
    *
   **
  ***
 ****
*****
*/
for(i=0; i<n;i++){
    pattern="";
    // spaces add karne ke liye loop
    for(space=1; space<n-i; space++){
        pattern+=" "
    }
    for(j=0;j<=i;j++){
        pattern +="*"
    }
    console.log(pattern)
}

// Q8. 


for (let i = 1; i <= n; i++) {
  let pattern = "";

  for (let j = 1; j <= n; j++) {
    // first row, last row, first column, last column
    if (i === 1 || i === n || j === 1 || j === n) {
      pattern += "*";
    } else {
      pattern += " ";
    }
  }

  console.log(pattern);
}
