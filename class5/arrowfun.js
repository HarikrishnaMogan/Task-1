let num =[2,4,5,61,7,9,11];
let odd =()=>{
  for(let i of num)
  {
    if(i%2!==0)
    {
       console.log(i);
    }
  }
}
odd();
------------------------------------------
let num =["hari","kavi"];
let caps =()=>{
  let ans =[];
  for(let i of num)
  {
     ans.push(i.toUpperCase());
  }
  console.log(ans);
}
caps();
---------------------------------------------
let num =[10,10,1];
let sum =()=>{
  let sum =0;
  for(let i of num)
  {
    sum+=i;
  }
  console.log(sum);
}
sum();
-------------------------------------------------
