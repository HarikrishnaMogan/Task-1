class Movie
{
    constructor(tittle,studio,rating="PG")
    {
        this.tittle = tittle;
        this.studio =studio;
        this.rating = rating;
        if(this.rating == "PG")
        {
            getPG(this);
        }
    }
}
let ans =[];
function getPG(v)
{
    ans.push(v);
}

let m1 = new Movie("Fault","Big11","PG");
let m2 = new Movie("star","ocean","PG13");
let m3 = new Movie("zero","Big11","PG");
console.log(ans);
