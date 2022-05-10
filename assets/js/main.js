

let vorname = document.getElementById('vorname');
let nachname = document.getElementById('nachname');
let land = document.getElementById('land');

function saveValue() {
    console.log('saveValue');
    let vorName = vorname.value;
    let nachName = nachname.value;
    let laNd = land.value;
    console.log('full name: ' + vorName + " " + nachName + ", Land: " + laNd);
}