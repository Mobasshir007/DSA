check(6)
check(18)
check(1)
check(0)
check(-1)
check(90)
function check(input){
if(input<1){
    console.log("Invalid age")
}else if(input<18){
    console.log("Teenager");
    
}else if(input>18 && input<60){
    console.log("Adult");
    
}
else{
    console.log("senior citizen")
}}