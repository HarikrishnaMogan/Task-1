1)   
let num = [1,4,3,4,5,6,7,9,10];
      let odd = function() {
  let ans=[];
    for(let i of num)
    {
      if(i%2==0)
      {
        ans.push(i);
      }
    }
    console.log(ans);
}
odd();
---------------------------
(function(){
   let ans=[];
  for(let i of num)
  {
    if(i%2===0)
    {
      ans.push(i);
    }
  }
  console.log(ans);
})();
-------------------------------------------------------------------------------------------
2)
let names = ["hari","mani","kavi","subash"];

let caps = function(){
  let ans =[];
  for(let i of names)
  {
    ans.push(i.toUpperCase());
  }
  console.log(ans);
}
caps();
-----------------------------
(function(){
  let ans =[];
  for(let i of names)
  {
    ans.push(i.toUpperCase());
  }
  console.log(ans);
})();
--------------------------------------------------------------------------------
3)
let num = [1,2,3,4,5];
let sum = function(arr){
  let sum =0;
   for(let i of arr)
   {
      sum +=i;
   }
   return sum;
}
console.log(sum(num));
-------------------------------
(function(arr){
  let sum =0;
  for(let i of arr)
  {
    sum +=i;
  }
  console.log(sum);
})(num);
-------------------------------------------------------------------------------------------------
