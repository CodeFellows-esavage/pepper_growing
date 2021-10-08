// Function 1: displays image of pepper type selected in radio button, if no button is selected, will "no pepper type selected"

function spicy(input)
{
    // let mild = document.getElementById("mild");
    // let medium = document.getElementById("medium");
    // let hot = document.getElementById("hot");

    if(input == 'mild')
    {
        // document.write('<p>image of mild pepper</p>');
        document.getElementById("pepperimg").innerHTML='<img src="red_bell_pepper.jpeg">';
    } else if(input == "medium")
    {
        document.getElementById("pepperimg").innerHTML='<img src="red_jalapeno.jpeg">';
    } else if(input == "hot")
    {
        document.getElementById("pepperimg").innerHTML='<img src="red_carolina_reaper.jpeg">';
        // document.write('<img scr="Carolina-Reaper-Pepper.jpg">');
    } else 
    {
        document.write("no pepper type selected");
    }
}

// Function 2: Prompts user if they live in seattle or not, and returns hariness zone if they do.
// attempting to add input detection loop
// let usrResponse = "Type Y or N";
// function seattleLocal()
// {

//     let local = prompt("Do you live in Seattle?", usrResponse);
//     console.log(local)
    
//     if(local == "Y" || local == "y"){
//         document.write('<h2> Hardiness Zone for Seattle is 8b, planting for peppers is ideal in late May</h2>')
//     } else if (local.toUpperCase() == "N"){ //.toUpperCase() forces input from user to be compaired as uppercase
//          document.write('<h2> Sorry no information for your region </h2>')
//     } else {
//         usrResponse = "Wrong Input!!! Type Y or N";
//         seattleLocal();
//     }

// }

//Function 2: Should perform the same as a Function 2 commented out above, but this time it is executed with a while loop.
function seattleLocal()
{
    // let userAnswer = prompt('Please Enter a number between 1-100');
    // while(userAnswer != 1 || userAnswer != 100){
    //     userAnswer = prompt('Try Again: Please Enter a number between 1-100');
    //     console.log(userAnswer);
    // }

    let local = prompt("Do you live in Seattle?", "Type Y or N");
    console.log(local)
    while(local.toUpperCase != "Y" || local.toUpperCase != "N"){ //no idea why this isn't breaking out of the loop when condition is met
        local = prompt("Do you live in Seattle?", "Wrong Input!!! Type Y or N");
        console.log(local);
    }
    if(local == "Y" || local == "y"){
        document.write('<h2> Hardiness Zone for Seattle is 8b, planting for peppers is ideal in late May</h2>')
    } else if (local.toUpperCase() == "N"){ //.toUpperCase() forces input from user to be compaired as uppercase
        document.write('<h2> Sorry no information for your region </h2>')
    } 
}

//Function 3: Places the current date on the website.
function yourDate()
{
    let currentDate = new Date();
    console.log(currentDate);
    
    let day = currentDate.getDate();
    console.log(day);
    let month = currentDate.getMonth() + 1; //(january is 0 so add 1)
    console.log(month);
    let year = currentDate.getFullYear();
    console.log(year);
    document.write('Today is: ' + month + '/' + day + '/' + year);
}

//Function 4: Checks number entered by user and then runs a loop to store the img url in pepperImg until the condition is met, then writes the string to the inner HTML to make that same number of peppers populate.

function cartAdd()
{ 
    let qty = document.getElementById("pepperCart").value; //.value pulls the number value from the number box field
    console.log(qty);
    let pepperImg = ''
    for (let i=0; i<qty; i++){
        pepperImg = pepperImg + '<img id="emoji" src="red_pepper_emoji.png">';
        //console.log(pepperImg);
    }
    document.getElementById("showCart").innerHTML=pepperImg;
}        