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
  let countries= values.filter(function(v)
   {
    if(v.population<200000)
      return v;
   })
   console.log(countries);
   //countries name
   let countriesname = countries.map(x=>
    {
      return x.name;
    })
   console.log(countriesname);
}
