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
4)
let num = [1,2,3,4,5,6,7,10,15,17];
 let prime = function(arr){
   let ans =[];
   for(let i of arr)
   {  let count =0;
      if(i==2)
      {
        ans.push(i);
      }
      else{
        for(let j=1;j<=Math.sqrt(i);j++)
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
----------------------------------------
(function(arr){
  let ans =[];
   for(let i of arr)
   {  let count =0;
      if(i==2)
      {
        ans.push(i);
      }
      else{
        for(let j=1;j<=Math.sqrt(i);j++)
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
   console.log(ans);
})(num);
-------------------------------------------------------------------------------------------------------------------------
5)
let txt = ["dad","mom","son",];
let palindrome = function(arr){
  let ans =[];
     for(let i of arr)
     {
       let j=0;
       let k = i.length-1;
       let n = Math.trunc(i.length/2);
       while(j<n)
       {
         if(i[j]==i[k])
         {
           j++;
           k--;
         }
         else{
           break;
         }
       }
       if(k==n)
       {
         ans.push(i);
       }
       
     }
     console.log(ans);
}
palindrome(txt);
----------------------------------------------
(function(arr){
  let ans =[];
  for(let i of arr)
  {
    let j=0;
    let k = i.length-1;
    let n = Math.trunc(i.length/2);
    while(j<n)
    {
      if(i[j]==i[k])
      {
        j++;
        k--;
      }
      else{
        break;
      }
    }
    if(k==n)
    {
      ans.push(i);
    }
    
  }
  console.log(ans);
})(txt);
--------------------------------------------------------------------------------------------------------------
6)
let num1 = [1,2,9];
let num2 = [3,4,7];
(function(){
  let i=0;
  let j=0;
  while(j<3)
  { 
    if(num1[i]==undefined)
    {
       num1[i] = num2[j];
       i++;
       j++;
    }
     if(num1[i]>num2[j])
     {
       let temp = num1[i];
       num1[i] = num2[j];
       num1[i+1] = temp;
       j++;
       i=i+1;
     }
     else{
       i++;
     }
  }
  let m = (num1[num2.length]+num1[num2.length-1])/2;
  console.log(m);
})();
--------------------------------------------------------------------------
let median = function(){
  let i=0;
  let j=0;
  while(j<3)
  { 
    if(num1[i]==undefined)
    {
       num1[i] = num2[j];
       i++;
       j++;
    }
     if(num1[i]>num2[j])
     {
       let temp = num1[i];
       num1[i] = num2[j];
       num1[i+1] = temp;
       j++;
       i=i+1;
     }
     else{
       i++;
     }
  }
  let m = (num1[num2.length]+num1[num2.length-1])/2;
  console.log(m);
}
median();
---------------------------------------------------------------------------------------------
7)
let arr =[1,2,3,4,4,2,1];
let unique = function(){
  let ans =[];
  for(let i of arr)
  {
    if(!ans.includes(i))
    {
      ans.push(i);
    }
  }
  return ans;
}
console.log(unique());
-------------------------------------------
(function(){
  let ans =[];
  for(let i of arr)
  {
    if(!ans.includes(i))
    {
      ans.push(i);
    }
  }
  console.log(ans);
})();
----------------------------------------------------------------------------------------------------
