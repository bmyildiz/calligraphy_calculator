// Array met karakters op basis van breedte
// Getal na array naam = aantal strokes per character
const karakter1 = ["i", "j", "1", "!", ".", ","]
const karakter2_5 = ["l", "t"]
const karakter3 = [" "]
const karakter3_5 = ["a", "b", "c", "d", "e", "f", "g", "h", "k", "l", "n", "o", "p", "q", "r", "s", "u", "v", "0", "2", "3", "4", "5", "6", "7", "8", "9", "?", "-"]
const karakter5 = ["&"]
const karakter6 = ["m", "w"]

// Stroke breedte multiplier per pen nib
const speedballC0 = 3.5
const speedballC1 = 2.5
const speedballC2 = 2
const speedballC3 = 1.5
const speedballC4 = 1

// Standaard geselecteerde pen nib (C-2)
let penNib = speedballC2

// Ruimte in strokes tussen karakters (ook spaties)
let letterRuimte = 1

// Spatie = aantal strokes tussen woorden
let spatie = 3

// Tekst van zin 1
let zin1 = ""

// Lengte van zin 1
let zin1Lengte = 0

document.querySelector("#knopZin1Invoeren").addEventListener("click", function() {
  // Reset zinlengte
  zin1Lengte = 0;

  // Slaat geselecteerde pen nib op
  let penNibKeuze = document.querySelector("#penNibSelectie").value

  // Match stroke breedte multiplier aan pen nib keuze
  if (penNibKeuze === "speedballC0") {
    penNib = speedballC0;
  } else if (penNibKeuze === "speedballC1") {
    penNib = speedballC1;
  } else if (penNibKeuze === "speedballC2") {
    penNib = speedballC2;
  } else if (penNibKeuze === "speedballC3") {
    penNib = speedballC3;
  } else if (penNibKeuze === "speedballC4") {
    penNib = speedballC4;
  }

  // Deze prompt slaat de te berekenen zin op als zin1
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

  // Vermenigvuldig zinlengte met gekozen pen nib
  zin1Lengte *= penNib;

  // Voer de berekende zinslengte in als Lengte
  document.querySelector("#zin1Lengte").textContent = zin1Lengte;

});
