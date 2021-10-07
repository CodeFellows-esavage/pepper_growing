// This will prompt if you live in Seattle

function spicy()
{
    let mild = document.getElementById("mild");
    let medium = document.getElementById("medium");
    let hot = document.getElementById("hot");

    if(mild.checked==true)
    {
        document.write('image of mild pepper');
    } else if(medium.checked==true)
    {
        document.write('image of medium spiciness pepper');
    } else if(hot.checked==true)
    {
        document.write('image of hot pepper');
        // document.write('<img scr="Carolina-Reaper-Pepper.jpg">');
    } else 
    {
        document.write("no pepper type selected");
    }
}
