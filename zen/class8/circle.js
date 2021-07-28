class circle
{
    constructor(radius,color)
    {
        this.radius = radius;
        this.color = color;
    }
    getarea()
    {
        return (Math.PI*Math.pow(this.radius,2));
    }
    getcircumference()
    {
        return Math.PI*this.radius*2;
    }
    getcolor()
    {
        return this.color;
    }
}
let c1= new circle(2,"red");
console.log(c1.getarea());
console.log(c1.getcircumference());
console.log(c1.getcolor());
