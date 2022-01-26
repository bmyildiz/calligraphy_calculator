// NOTES
// maak letterruimte apart invulbaar, ipv bepaald door de nib selectie zoals nu
// tabel invoegen met standaard letterruimtes.

// =============================
// CONSTANTEN
// =============================

// Array met karakters op basis van breedte
// Getal na array naam = aantal strokes per character
const karakter1 = ["i", "j", "1", "!", ".", ","]
const karakter2_5 = ["l", "t"]
const karakter3 = [" "]
const karakter3_5 = ["a", "b", "c", "d", "e", "f", "g", "h", "k", "l", "n", "o", "p", "q", "r", "s", "u", "v", "0", "2", "3", "4", "5", "6", "7", "8", "9", "?", "-"]
const karakter5 = ["&"]
const karakter6 = ["m", "w"]

// Standaard geselecteerde pen nib (C-2)
let penNib = 2

// Ruimte in strokes tussen karakters (ook spaties) in mm (default 2.5 van C2 nib)
let letterRuimte = 2.5

let zin1LetterRuimte = 0

// Spatie = aantal strokes tussen woorden
let spatie = 3

// Tekst van zin 1
let zin1 = ""

// Lengte van zin 1
let zin1Lengte = 0

// Uitgeschreven berekening
let zin1Berekening = ""


// =============================
// BEREKENINGEN
// =============================

document.querySelector("#knopFormInvoeren").addEventListener("click", function() {
  // Zoek op in formulier wat de ingevulde absolute letterruimte is
  letterRuimte = document.querySelector("#ingevoerdeLetterRuimte").valueAsNumber

  // Vul de ingevulde letterruimte in als Letter ruimte op de pagina
  document.querySelector("#zin1LetterRuimte").textContent = letterRuimte
})

document.querySelector("#knopZin1Invoeren").addEventListener("click", function() {
  // Reset zinlengte en berekening
  zin1Lengte = 0;
  zin1Berekening = "";

  // Slaat geselecteerde pen nib op
  let penNibKeuze = document.querySelector("#penNibSelectie").value

  // Match stroke breedte multiplier aan pen nib keuze
  switch (penNibKeuze) {
    case "speedballC0":
      penNib = 3.5;
      break;
    case "speedballC1":
      penNib = 2.5;
      break;
    case "speedballC2":
      penNib = 2;
      break;
    case "speedballC3":
      penNib = 1.5;
      break;
    case "speedballC4":
      penNib = 1;
      break;
    default:
      alert("Geen pen nib gekozen")
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
    } else if (karakter3.includes(zin1.charAt(i))) {
      zin1Lengte += 3;
    } else if (karakter3_5.includes(zin1.charAt(i))) {
      zin1Lengte += 3.5;
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

  // Voeg letter ruimte toe (# karakters -1) * letterRuimte
  zin1LetterRuimte = letterRuimte * (zin1.length - 1);

  zin1Lengte += zin1LetterRuimte;

  // Voer de berekende zinslengte in als Lengte
  document.querySelector("#zin1Lengte").textContent = zin1Lengte;

  // Voer de helft van de berekende zinslengte in als 1/2 lengte
  document.querySelector("#zin1LengteHalf").textContent = (zin1Lengte*0.5);

  // Toon berekening in HTML
  document.querySelector("#zin1Berekening").textContent = zin1Berekening;
});
