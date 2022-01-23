// Array met karakters op basis van breedte
// Getal na array naam = aantal strokes per character
const karakter1 = ["i", "j", "1", "!", ".", ","]
const karakter2_5 = ["l", "t"]
const karakter3_5 = ["a", "b", "c", "d", "e", "f", "g", "h", "k", "l", "n", "o", "p", "q", "r", "s", "u", "v", "0", "2", "3", "4", "5", "6", "7", "8", "9", "?", "-"]
const karakter4 = [" "]
const karakter5 = ["&"]
const karakter6 = ["m", "w"]

// Spatie = aantal strokes tussen woorden
const spatie = 4

let zin1 = "";
let zin1Lengte = 0;

document.querySelector("#knopZin1Invoeren").addEventListener("click", function() {
  zin1 = prompt("Wat is zin 1?");

  // Vul de ingevoerde zin in als Tekst
  document.querySelector("#zin1Tekst").textContent = zin1;

  // Tel het aantal karakters in de zin en vul in als Aantal karakters
  document.querySelector("#zin1AantalKarakters").textContent = zin1.length;

// Deze for loop zoekt ieder karakter uit de ingevoerde zin op
// Per karakter wordt de lengte opgeteld bij de zinslengte
// Als een karakter niet voorkomt in de arrays (lengte niet bekend is), komt er een popup met welk karakter onbekend is.
for (i=0; i<zin1.length; i++) {
  if (karakter1.includes(zin1.charAt(i))) {
    zin1Lengte += 1;
  } else if (karakter2_5.includes(zin1.charAt(i))) {
    zin1Lengte += 2.5;
  } else if (karakter3_5.includes(zin1.charAt(i))) {
    zin1Lengte += 3.5;
  } else if (karakter4.includes(zin1.charAt(i))) {
    zin1Lengte += 4;
  } else if (karakter5.includes(zin1.charAt(i))) {
    zin1Lengte += 5;
  } else if (karakter6.includes(zin1.charAt(i))) {
    zin1Lengte += 6;
  } else {
    alert("De zin bevat karakter: [" + zin1.charAt(i) + "] . Daarvoor is geen lengte ingevoerd.")
  }
}

  document.querySelector("#zin1Lengte").textContent = zin1Lengte;

});


for (i=0; i>zin1.length; i++) {
  if (karakter1.includes(zin1.charAt(i))) {
    zin1Lengte += 1;
    console.log("+1");
  } else if (karakter2_5.includes(zin1.charAt(i))) {
    zin1Lengte += 2.5;
    console.log("+2.5");
  } else if (karakter3_5.includes(zin1.charAt(i))) {
    zin1Lengte += 3.5;
    console.log("+3.5");
  } else if (karakter4.includes(zin1.charAt(i))) {
    zin1Lengte += 4;
    console.log("+4");
  } else if (karakter5.includes(zin1.charAt(i))) {
    zin1Lengte += 5;
    console.log("+5");
  } else if (karakter6.includes(zin1.charAt(i))) {
    zin1Lengte += 6;
    console.log("+6");
  } else alert("Zin bevat karakters zonder ingevoerde lengte")
}
