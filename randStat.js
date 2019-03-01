// 
// 
//

// First test -- SUCCESS!!
// var total;

// function generateRandomNumber(min_value , max_value) 
// {
//     total = Math.round(Math.random() * (max_value-min_value) + min_value);
//     console.log(total);
// }

//generateRandomNumber(0,5);

/////////////////////////////////////////////////////////////////////////////

// Second test -- SUCCESS!!
// var total;

// function generateRandomNumber() 
// {
//     total = Math.round(Math.random() * (1000-0) + 0);
    
//     console.log(total);
    
//     var statTotal = 0;
//     for (i=0; i<total; i++)
//     {
//             statTotal++;
//         console.log(statTotal);
//     }


// }

// generateRandomNumber();

////////////////////////////////////////////////////////////////////

// Third Test -- 
/* var total;
var counts = [];
var statTotal = 0;

function generateRandomNumber() 
{

    // generate randon number
    // generate random number up counter
    // print out total and counter
    // add total to the array

    for (i=0; i<4; i++)
    {
        total = Math.round(Math.random() * (10-0) + 0);  //(1000-0) + 0);
        counts.push(total);
    }

    console.log(counts);

    counts.forEach(myFunction);
    var index = 0;
    function myFunction(total, index) {
    
        for(i=0; i<total; i++)
        {
            statTotal--;
            console.log(statTotal);
        }
    }

}
 */
// generateRandomNumber();

/////////////////////////////////////////////////////////

// Fourth Test -- 
var total;              // hold random number amount
var counts = [];        // array to hold each stat amount
var counterUp = 0;      // to hold the 
var counterUp2 = 0;
var counterUp3 = 0;
var counterUp4 = 0;
var stat1;
var stat2;
var stat3;
var stat4;

function generateRandomNumber() 
{

    for (i=0; i<4; i++)
    {
        total = Math.round(Math.random() * (10-0) + 0);  //(1000-0) + 0);
        counts.push(total);
    }

    console.log(counts);

    // seperated the array values into individual variables
    stat1 = counts.pop();
    stat2 = counts.pop();
    stat3 = counts.pop();
    stat4 = counts.pop();

    console.log(stat1 + " " + stat2 + " " + stat3 + " " + stat4);

    for (i = 0; i < stat1; i++)
    {
        counterUp++;
        console.log(counterUp);
    }

    console.log(" ");

    for (i = 0; i < stat2; i++)
    {
        counterUp2++;
        console.log(counterUp2);
    }

    console.log(" ");

    for (i = 0; i < stat3; i++)
    {
        counterUp3++;
        console.log(counterUp3);
    }
    console.log(" ");

    for (i = 0; i < stat4; i++)
    {
        counterUp4++;
        console.log(counterUp4);
    }

}

generateRandomNumber();


