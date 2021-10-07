// Prompt if you live in seattle

let seattleLocal = prompt("Do you live in Seattle? YES or NO");
console.log(seattleLocal)

if(seattleLocal== "YES"){
    document.write('<h2> Hardiness Zone for Seattle is 8b, planting for peppers is ideal in late May</h2>')
} else {
     document.write('<h2> Sorry no information for your region </h2>')
}