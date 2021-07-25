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
var min = 5;
function toseconds(min)
{
  return min*60;
}
var secs = toseconds(min);
console.log(secs);
------------------------------------------------
var mystr = "5";
function toInteger(mystr) {
  return parseInt(mystr);
}
var myint = toInteger(mystr)
console.log(myint);
---------------------------------------------
var myint = 0;
function nextNumber(myint) {
  return myint+1;
}
var myNextint = nextNumber(myint)
console.log(myNextint);
-----------------------------------------------
var arr = [1, 2, 3];
function getFirstElement(arr) {
  return arr[0];
}
var data = getFirstElement(arr)
console.log(data);
-----------------------------------------------
var arr = [1, 2, 3];
function hourToSeconds(arr) {
  for(let i=0;i<arr.length;i++)
  {
    arr[i]= +arr[i]*3600;
  }
  return arr;
}
var data = hourToSeconds(arr)
console.log(data);
-----------------------------------------------
function findPerimeter(num1,num2) {
  return 2*num1+2*num2;
}
var peri = findPerimeter(6,7)
console.log(peri);
---------------------------------------------
