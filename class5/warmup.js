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

function areBothOdd(num1, num2){
  if(num1%2!=0&&num2%2!=0)
  return true;
  else
  return false;
 }
 var res = areBothOdd(1,3)
console.log(res);
--------------------------------------------------------

function getFullName(firstName, lastName){
    return firstName+" "+lastName;
 }
 var res = getFullName("guvi","geek");
console.log(res);
------------------------------------------------------
function getLengthOfWord(word1){
   return word1.length;
 }
 var res = getLengthOfWord("GUVI");
console.log(res);
--------------------------------------------------------
function isSameLength(word1, word2){
  if(word1.length == word2.length)
  return true;
  else
  return false;
 }
 var res = isSameLength("hari","kavi");
console.log(res);
-------------------------------------------------------
console.log(getDistance(100, 100, 400, 300));
function getDistance(x1, y1, x2, y2)
{
  return Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2));
}
----------------------------------------------------------
function getNthElement(array,n){
   return array[n];
 }
 var res = getNthElement([1, 3, 5], 1);
 console.log(res);
-------------------------------------------------------
function getLastElement(array){
  return array[array.length-1];
 }
 var res = getLastElement([1, 2, 3, 4]);
 console.log(res);
------------------------------------------------------------
var obj = {
  mykey: "value"
 };
 function getProperty(obj, key) {
  return obj[key];
 }
 var res = getProperty(obj,"mykey");
 console.log(res);
-----------------------------------------------------------------
var obj = {};
 function addProperty(obj, key){
   return obj[key]=true;
 }
 var res = addProperty(obj, "mykey");
 console.log(obj);
----------------------------------------------------------------
var obj = {
  mykey: "value"
 };
function removeProperty(obj, key){
   return delete obj[key];
 }
  removeProperty(obj,"mykey");
 console.log(obj);
-----------------------------------------------------------------------
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives(arr) {
  let count =0;
  let sum =0;
   for(let i=0;i<arr.length;i++)
   {
     if(i%2==0)
     {
        count++;
     }
     else{
       sum +=arr[i];
     }
   }
   console.log(count,sum);
}
ar2(arr);
-------------------------------------------------------------
function getPositives(ar)
{
  let ans=[];
   for(let i of ar)
   {
     if(i>=0)
     {
       ans.push(i);
     }
   }
   return ans;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);
-----------------------------------------------------------------
function powersOfTwo(n){
  let ans =[];
  for(let i=0;i<=n;i++)
  {
    ans.push(Math.pow(2,i));
  }
  return ans;
}
console.log(powersOfTwo(2))
----------------------------------------------------------------
function findMax(ar)
{
  let m = -Infinity;
  for(let i of ar)
  {
    m = Math.max(m,i);
  }
  return m;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log(max);
---------------------------------------------------------------------
printPrimes(100);
// Function prints the first nPrimes numbers
function printPrimes(nPrimes)
{
 var n = 0;
 var i = 2;
 
 while(n < nPrimes)
 {
 if (isPrime(i))
 {
 console.log(n, " → ", i);
 n++;
 }
 
 i++;
 }
}
// Returns true if a number is prime
function isPrime(n)
{
    let count=0;
   for(let i=1;i<=n;i++)
   {
      if(n%i==0)
      {
          count++;
      }
      if(count >2)
      {
          break;
      }
   }
   if(count<=2)
   {
       return true;
   }
}
---------------------------------------------------------
console.log(getPrimes(10, 100));
function getPrimes(nPrimes, startAt)
{
    let ans=[];
 for(let i=0;i<nPrimes;i++)
 {
    if(isPrime(startAt))
    {
        ans.push(startAt);
    }
    startAt++;
 }
 return ans;
 
}
function isPrime(n)
{
    let count=0;
   for(let i=1;i<=n;i++)
   {
      if(n%i==0)
      {
          count++;
      }
      if(count >2)
      {
          break;
      }
   }
   if(count<=2)
   {
       return true;
   }
}
-----------------------------------------------------------------------------
var s = reverseString("JavaScript");
console.log(s);
function reverseString(s)
{
    let t="";
  for(let i=s.length-1;i>=0;i--)
  {
      t += s[i];
  }
  return t;
}
-----------------------------------------------------------------------
