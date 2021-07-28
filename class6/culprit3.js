//Fix the code to get the largest of three.
aa = (f,s,t) => {
    console.log(f,s,t);
    if(f>s &&f>t){
    console.log(f)}
    else if(s>f && s>t){
    console.log(s)}
    else{
    console.log(t)}
   }
   aa(1,2,3);
-----------------------------------------------------------
//Fix the code to Sum of the digits present in the number
 let n = 123;
console.log(add(n));
function add(n)
{
let sum = 0;
let k = n.toString();
for(var i=0;i<k.length;i++){
 sum+= +k[i]
 }
 return sum;
}
-------------------------------------------------------------
//Fix the code to Sum of all numbers using IIFE function
    const arr = [9,8,5,6,4,3,2,1];
(function() {
 let sum = 0;
 for (var i = 0; i < arr.length; i++){
 sum += arr[i];
 }
 console.log(sum);
})();
-----------------------------------------------------------
