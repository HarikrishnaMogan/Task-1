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
