//  Check if number is palindrome or not
 let num =333;
 let original=num;
 function Palindrom(num){
    let rev=0;
    while(num>0){
       let rem=num%10;
        rev=(10*rev)+rem
        num= Math.floor(num/10)
    }  
    return rev==original                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
 }
 let plnd=Palindrom(num)
console.log( plnd)

// Practice


function pal(n){
    let reverse=0;
    let originalNum=n
    if(n<0) return false
    while(n>0){
        rem=n%10;
        reverse=(10*reverse)+rem;
        n=Math.floor(n/10);

    }
  
    console.log(reverse)
    return reverse==originalNum;
    
}


let npal=pal(-505)
console.log(npal)

// Q. palindrome of strings







