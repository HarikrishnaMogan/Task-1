class uber
{
    constructor(distance)
    {
        this.basefare = 50;
        this.costperkm = 8;
        this.d =distance;
    }
    getprice()
    {
        return (this.basefare+this.costperkm*this.d);
    }
}
let t1 = new uber(10);
console.log(t1.getprice());
