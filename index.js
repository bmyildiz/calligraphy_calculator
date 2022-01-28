// NOTES
// Nettere printout maken, mogelijk via objects

// HTML toevoegen ipv vervangen bij iedere berekening


// =============================
// CONSTANTEN EN STARTVARIABELEN
// =============================

// Array met karakters op basis van breedte
// Getal na array naam = aantal strokes per character
const karakter1 = ["i", "j", "1", "!", ".", ","]
const karakter2_5 = ["l", "t"]
const karakter3 = [" "]
const karakter3_5 = ["a", "b", "c", "d", "e", "f", "g", "h", "k", "n", "o", "p", "q", "r", "s", "u", "v", "0", "2", "3", "4", "5", "6", "7", "8", "9", "?", "-"]
const karakter5 = ["&"]
const karakter6 = ["m", "w"]

// Map met pen nib multiplier per nib
const penNibMap = new Map();

// Deze waarden staan als penNib multiplier ingesteld
penNibMap.set("speedballC0", 3.5);
penNibMap.set("speedballC1", 2.5);
penNibMap.set("speedballC2", 2);
penNibMap.set("speedballC3", 1.5);
penNibMap.set("speedballC4", 1);

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

document.querySelector("#knopZinBerekenen").addEventListener("click", function() {
  // Reset zinlengte en berekening
  zin1Lengte = 0;
  zin1Berekening = "";

  // Zoek op in formulier wat de ingevulde absolute letterruimte is
  letterRuimte = document.querySelector("#formLetterafstand").valueAsNumber;

  // Vul de ingevulde letterruimte in als Letter ruimte op de pagina
  document.querySelector("#zin1LetterRuimte").textContent = letterRuimte;

  // Slaat geselecteerde pen nib op
  let penNibKeuze = document.querySelector("#formPenNibSelectie").value

  // Vul Pen Nib in bij HTML output
  document.querySelector("#zin1PenNib").textContent = penNibKeuze;

  // Zoek penNibKeuze op in penNibMap en haal bijbehorende multiplier op
  penNib = penNibMap.get(penNibKeuze);

  // Sla ingevulde tekst op als Zin1
  zin1 = document.querySelector("#formZin").value;

  // Tel het aantal karakters in de zin en vul in als Aantal karakters
  document.querySelector("#zin1AantalKarakters").textContent = zin1.length;

  // Deze for loop zoekt ieder karakter uit de ingevoerde zin op
  // Per karakter wordt de lengte opgeteld bij de zinslengte
  // Als een karakter niet voorkomt in de arrays (lengte niet bekend is), komt er een popup met welk karakter onbekend is.
  for (i=0; i<zin1.length; i++) {
    if (karakter1.includes(zin1.charAt(i))) {
      zin1Lengte += (1*penNib);
      zin1Berekening += (1*penNib + " ");
    } else if (karakter2_5.includes(zin1.charAt(i))) {
      zin1Lengte += (2.5*penNib);
      zin1Berekening += (2.5*penNib + " ");
    } else if (karakter3.includes(zin1.charAt(i))) {
      zin1Lengte += (3*penNib);
      zin1Berekening += (3*penNib  + " ");
    } else if (karakter3_5.includes(zin1.charAt(i))) {
      zin1Lengte += (3.5*penNib);
      zin1Berekening += (3.5*penNib + " ");
    } else if (karakter5.includes(zin1.charAt(i))) {
      zin1Lengte += (5*penNib);
      zin1Berekening += (5*penNib + " ");
    } else if (karakter6.includes(zin1.charAt(i))) {
      zin1Lengte += (6*penNib);
      zin1Berekening += (6*penNib + " ");
    } else {
      alert("De zin bevat karakter: [" + zin1.charAt(i) + "] . Daarvoor is geen lengte ingevoerd.")
    }
  }

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
