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
  let num = [1,2,3,4,5,6,7,10,15,17];
 let prime = (arr)=>{
   let ans =[];
   for(let i of arr)
   {  let count =0;
      if(i==2)
      {
        ans.push(i);
      }
      else{
        for(let j=1;j<=i;j++)
        {
          if(i%j==0)
          {
            count++;
          }
          if(count>2){
            break;
          }
    
        }
        if(count ==2)
        {
          ans.push(i);
        }
      }
      }
   return ans;
}
console.log(prime(num));
