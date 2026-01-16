let arr=[2,2,3,3,4,5,5,6,6,7,8,8]
let x=0;
function removeDup(arr){
for(i=0;i<arr.length;i++){
    if(arr[i]>arr[x]){
        x = x+1;
        arr[x]=arr[i]
    }

}
return x+1
}
let rd=removeDup(arr)
console.log(rd)