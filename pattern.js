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
for(i=0;i<n; i++){

 
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
let ne=" "
for(i=0;i<n;i++){
    for(j=1;j<=i; j++){
        ne += j+i
    }
console.log(ne);

}