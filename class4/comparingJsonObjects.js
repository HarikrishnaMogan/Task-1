var obj1 = { name: "Person 1", age:[5,4,"ario",3,"haro"] };
var obj2 = { age:["haro","ari",3,4,5], name: "Person 1" };
let flag = true;

//can be used to compare objects of arrays and objects of objects

for(let i in obj1)
{
    if(typeof obj1[i] == "object"||typeof obj2[i]== "object")
    {
        if(!Array.isArray(obj1[i])&&!Array.isArray(obj2[i]))
        {
            for(let j in obj1[i])
            {   
                if(obj1[i][j]!==obj2[i][j])
                {
                    flag = false;
                    break;
                }
            }
        }
        else{
            if(obj1[i].sort().join("")!=obj2[i].sort().join(""))
            {
                  flag = false;
                  break;
            }
        }
       
    }
    else{
        if(obj1[i]!==obj2[i])
        {
           flag = false;
           break;
        }
    }
    if(!flag)
    {
        break;
    }
}
if(flag)
{
    console.log(true);
}
else{
    console.log(false);
}

