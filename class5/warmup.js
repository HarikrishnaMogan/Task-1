var num=10;
function addfive(num)
{
  return 5+this.num;
}
var result = addfive(num);
console.log(result);
----------------------------------------------
var num= 5;
function getopposite(num)
{
  if(num == parseInt(num))
  {
    return -num;
  }
  else{return -1;}
}
var result = getopposite(num);
console.log(result);
------------------------------------------------
