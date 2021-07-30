var xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.eu/rest/v2/all");
xhr.onload=function(){
  var data = JSON.parse(this.response);
  getrequired(data);
}
xhr.onerror = function()
{
  console.log("Error",this.statusText);
}
xhr.send();

function getrequired(values)
{
   values.filter(function(v)
   {
    if(v.region =="Asia")
     console.log(v.name);
   })
}
