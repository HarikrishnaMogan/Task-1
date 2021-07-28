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
//Fix the code to gen Title caps.
    var arr = ["guvi", "geek", "zen", "fullstack"];
var ano = function(arro) {
 for (var i = 0; i < arro.length; i++) {
 console.log(arro[i].toUpperCase());
 }
}
ano(arr);
---------------------------------------------------------
//Fix the code to return the Prime numbers
    const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(num=>{
    let count =0;
 for(let i=2;i<=num;i++){
 if(num%i===0)
 {
     count++;
 }
}
if(count<=1)
 {
    return true;
 }
});
console.log(myPrime);
--------------------------------------------------------------------
//Fix the code to sum the number in that array
const num = [10, 20, 30, 40,50,60,70,80,90,100] 
const sums = (a, b) =>{
return a + b
}
 
const sum = num.reduce(sums)
console.log(sum)
----------------------------------------------------
//Fix the code to rotate an array by k times and return rotated array using IIFE function
var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
let a =[];
(function() {
 let n=arr.slice(0,k);
 for(let i=k;i<arr.length;i++)
 {
     a.push(arr[i]);
 }
 a=a.concat(n);

 console.log(a);})();
-----------------------------------------------------------------------
