// Aktuális hónap lekérése
const date = new Date();
var honap = date.toLocaleString('default', { month: 'long' });
// Tömb a hónapok nevével
var monthNames = ["január", "február", "március", "április", "május", "június",
    "július", "augusztus", "szeptember", "október", "november", "december"
];
// Select kiválasztása
var select = document.getElementById("monthNames");
// Select feltöltése a hónapok neveivel 
for (var i = 0; i < monthNames.length; i++) {
    var optn = monthNames[i]; // 
    var el = document.createElement("option"); // option létrehozása
    el.textContent = optn;
    select.appendChild(el);
}
// A kiválasztott option értékének lekérése
document.getElementById('monthNames').onchange = function(event) {
        event.preventDefault();
        var honap = document.forms[0].monthNames.value;;
        // Switch meghívása
        switchSeason(honap);
    }
    // Switch meghívása az alap beállításhoz
switchSeason(honap);

// Switch function 
function switchSeason(honap) {
    switch (honap) {
        case 'március':
        case 'április':
        case 'május':
            console.log('Tavasz');
            document.getElementById("container").classList.add("tavasz");
            document.getElementById("container").classList.remove("nyar");
            document.getElementById("container").classList.remove("osz");
            document.getElementById("container").classList.remove("tel");
            document.getElementById('season').innerHTML = 'Tavasz' + '<div class="month">' + honap + '</div>';
            break;
        case 'június':
        case 'július':
        case 'augusztus':
            console.log('Nyár');
            document.getElementById('container').classList.add("nyar");
            document.getElementById("container").classList.remove("tavasz");
            document.getElementById("container").classList.remove("osz");
            document.getElementById("container").classList.remove("tel");
            document.getElementById('season').innerHTML = 'Nyár' + '<div class="month">' + honap + '</div>';
            break;
        case 'szeptember':
        case 'október':
        case 'november':
            console.log('Ősz');
            document.getElementById('container').classList.add("osz");
            document.getElementById("container").classList.remove("nyar");
            document.getElementById("container").classList.remove("tavasz");
            document.getElementById("container").classList.remove("tel");
            document.getElementById('season').innerHTML = 'Ősz' + '<div class="month">' + honap + '</div>';
            break;
        case 'december':
        case 'január':
        case 'február':
            console.log('Tél');
            document.getElementById('container').classList.add("tel");
            document.getElementById("container").classList.remove("nyar");
            document.getElementById("container").classList.remove("osz");
            document.getElementById("container").classList.remove("tavasz");
            document.getElementById('season').innerHTML = 'Tél' + '<div class="month">' + honap + '</div>';
            break;
        default:
            console.log('Nincs ilyen hónap!');
            break;
    }
}