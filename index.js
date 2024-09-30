for ( let i = 1; i <=100; i++)
{
    if(i % 3 === 0 && i % 5 === 0)
    {
        console.log("Fizz Buzz");
    }
    else if (i % 3 === 0)
    {
        console.log("Fizz");
    }
    else if (i % 5 === 0)
    {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
let n = 4;
let isPrime = true;
for ( let i = n; i++;)
{
    let j = i/2;
    for(let k = 2; k <= j; k++)
    {
        if (i % k === 0)
        {
            isPrime = false;
            break;
        }
        else {
            isPrime = true;
        }
    }
    if(isPrime)
    {
        console.log(i);
        break;
    }
}
let data = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"
let newData = data.split(/\n/);
let cellData = [];
for (let i = 0; i < newData.length; i++)
{
    cellData[i] = newData[i].split(/,/);
    console.log(cellData[i][0]+ "|", cellData[i][1] + "|", cellData[i][2] + "|", cellData[i][3]+ "|");
}