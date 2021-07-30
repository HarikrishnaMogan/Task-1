let a = [3,5,2,84,12,6];
console.log(sortarray(a));
function sortarray(arr)
{
   if(arr.length<=1)
   {
     return arr;
   }
   let mid = Math.trunc(arr.length/2);
   let leftarr = arr.slice(0,mid);
   let rightarr=arr.slice(mid);

   return mergearray(sortarray(leftarr),sortarray(rightarr));

}

function mergearray(leftarr,rightarr)
{
  let ans=[];
  while(leftarr.length&&rightarr.length)
  {
    if(leftarr[0]<rightarr[0])
    {
      ans.push(leftarr.shift());
    }
    else{
      ans.push(rightarr.shift());
    }
  }
  return ans.concat(leftarr,rightarr);
}


