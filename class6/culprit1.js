<!DOCKTYPE html>
<html>
    <body>
        <script>
            alert("I’m JavaScript!");
        </script>
    </body>
</html>
---------------------------------------------------------------
<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script>
</body>
</html>
alert("I’m invoked!");
---------------------------------------------------------
let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+" "+lname;
alert( admin ); // "Guvi geek"
------------------------------------------------
let fname=10.5; 
fname = "Guvi";
let lname = "geek"
let names = fname+lname;
alert( `hello ${names}`);
------------------------------------------------
let a = prompt("First number?");
let b = prompt("Second number?");
alert(+a + +b);
-----------------------------------------
let value = prompt('How many runs you scored in this ball');
if (value == 4) {
      console.log("You hit a Four");
} else if (value == 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}
-------------------------------------------
let login = '';
let message = (login == 'Employee') ? 
   'Greetings' : (login == 'Director') ? "greeting":'No login';
console.log(message);
---------------------------------------------------------
let message;
if (message == undefined)
{
   message = "welcome boss";
}
else
{
   message = "Go away";
}
  console.log(message);
----------------------------------------------------
let message;
let lock = false;
//Dont change any code below this 
if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
  console.log(message);
---------------------------------------------
let message;
let lock = false;
//Dont change any code below this 
if (lock && " " || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);
---------------------------------------------
let i = 3;
while (i>0) {
  console.log( i-- );
}
--------------------------------------
let num = 1
for(let i=0;i<10;i++)
{console.log(num);
    num++;}
------------------------------------
for (let num = 2; num <= 20; num += 2) {
    console.log(num)
  }
-------------------------------------
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}
---------------------------------------------------
