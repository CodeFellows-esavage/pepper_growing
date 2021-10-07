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

// function seattleLocal()
// {
//     let local = prompt("Do you live in Seattle?", "Type: Y or N");
//     console.log(local)
    
//     if(local== "Y"){
//         document.write('<h2> Hardiness Zone for Seattle is 8b, planting for peppers is ideal in late May</h2>')
//     } else {
//          document.write('<h2> Sorry no information for your region </h2>')
//     }

// }

// attempting to add input detection loop
let usrResponse = "Type Y or N";
function seattleLocal()
{

    let local = prompt("Do you live in Seattle?", usrResponse);
    console.log(local)
    
    if(local == "Y" || local == "y"){
        document.write('<h2> Hardiness Zone for Seattle is 8b, planting for peppers is ideal in late May</h2>')
    } else if (local.toUpperCase() == "N"){ //.toUpperCase() forces input from user to be compaired as uppercase
         document.write('<h2> Sorry no information for your region </h2>')
    } else {
        usrResponse = "Wrong Input!!! Type Y or N";
        seattleLocal();
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