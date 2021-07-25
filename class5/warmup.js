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
function lessThan100(num1,num2) {
  if(num1+num2 <100)
  { return true;}
  else{return false;}
}
var res = lessThan100(22,15)
console.log(res);
----------------------------------------------
function remainder(num1,num2) {
  return num1%num2;
}
var res = remainder(1,3)
console.log(res);
--------------------------------------------------
function CountAnimals(tur,horse,pigs) {
  return 2*tur+4*horse+4*pigs;
}
var legs = CountAnimals(2,3,5)
console.log(legs);
-------------------------------------------------
function frames(num1,num2) {
  return num1*num2*60;
}
var fps = frames(1,2)
console.log(fps);
------------------------------------------------

function isEven(num){
  if(num%2==0)
  return true
  else
  return false
 }
 var even = isEven(5)
console.log(even);
-------------------------------------------------------
