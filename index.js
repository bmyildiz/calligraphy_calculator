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

// Map met karakters per stroke breedte
const karakterMap = new Map();

// Voeg alle karakters uit array toe aan karakter map met bijbehorende stroke breedte.
for (let i = 0; i < karakter1.length; i++) {
  karakterMap.set(karakter1[i], 1);
}

for (let i = 0; i < karakter2_5.length; i++) {
  karakterMap.set(karakter2_5[i], 2.5);
}

for (let i = 0; i < karakter3.length; i++) {
  karakterMap.set(karakter3[i], 3);
}

for (let i = 0; i < karakter3_5.length; i++) {
  karakterMap.set(karakter3_5[i], 3.5);
}

for (let i = 0; i < karakter5.length; i++) {
  karakterMap.set(karakter5[i], 5);
}

for (let i = 0; i < karakter6.length; i++) {
  karakterMap.set(karakter6[i], 6);
}

// Map met pen nib multiplier per nib
const penNibMap = new Map();

// Deze waarden staan als penNib multiplier ingesteld
penNibMap.set("speedballC0", 3.5);
penNibMap.set("speedballC1", 2.5);
penNibMap.set("speedballC2", 2);
penNibMap.set("speedballC3", 1.5);
penNibMap.set("speedballC4", 1);

// Standaard geselecteerde pen nib (C-2)
let penNib = penNibMap.get("speedballC2")

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

$("#knopZinBerekenen").on("click", function() {
  // Reset zinlengte en berekening
  zin1Lengte = 0;
  zin1Berekening = "";

  // Zoek op in formulier wat de ingevulde absolute letterruimte is
  letterRuimte = $("#formLetterafstand").val();

  // Vul de ingevulde letterruimte in als Letter ruimte op de pagina
  $("#zin1LetterRuimte").text(letterRuimte);

  // Slaat geselecteerde pen nib op
  let penNibKeuze = $("#formPenNibSelectie").val()

  // Vul Pen Nib in bij HTML output
  $("#zin1PenNib").text(penNibKeuze);

  // Zoek penNibKeuze op in penNibMap en haal bijbehorende multiplier op
  penNib = penNibMap.get(penNibKeuze);

  // Sla ingevulde tekst op als Zin1
  zin1 = $("#formZin").val();

  // Toon zin als zin tekst
  $("#zin1Tekst").text(zin1);

  // Tel het aantal karakters in de zin en vul in als Aantal karakters
  $("#zin1AantalKarakters").text(zin1.length);

  // Check of karakter uit zin voorkomt in karakterMap
  // Ja:
    // Zoekt ieder karakter uit de zin op in de karakterMap
    // Neemt de stroke breedte van het karakter
    // Telt dit op bij zin1Lengte
    // Voegt dit toe aan uitgeschreven berekening
  // Nee:
    // Alert met welk karakter niet voorkomt in map

  for (i=0; i<zin1.length; i++) {
    if (karakterMap.has(zin1.charAt(i))) {
      zin1Lengte += (karakterMap.get(zin1.charAt(i))*penNib);
      zin1Berekening += (karakterMap.get(zin1.charAt(i))*penNib + " ");
    } else {
      alert("De zin bevat karakter: [" + zin1.charAt(i) + "] . Daarvoor is geen lengte ingevoerd.")
    }
  };

  // Voeg letter ruimte toe (# karakters -1) * letterRuimte
  zin1LetterRuimte = letterRuimte * (zin1.length - 1);

  zin1Lengte += zin1LetterRuimte;

  // Voer de berekende zinslengte in als Lengte
  $("#zin1Lengte").text(zin1Lengte);

  // Voer de helft van de berekende zinslengte in als 1/2 lengte
  $("#zin1LengteHalf").text(zin1Lengte*0.5);

  // Toon berekening in HTML
  $("#zin1Berekening").text(zin1Berekening);
});
