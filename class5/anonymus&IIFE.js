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
