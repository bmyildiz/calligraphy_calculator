// ====================================================
// CONSTANTEN EN STARTVARIABELEN
// ====================================================

// ----------------------------------------------------
// KARAKTERS
// ----------------------------------------------------

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

// ----------------------------------------------------
// PEN NIBS
// ----------------------------------------------------

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

// ----------------------------------------------------
// LETTER EN WOORD AFSTAND
// ----------------------------------------------------

// Ruimte in strokes tussen karakters (ook spaties) in mm (default 2.5 van C2 nib)
let letterAfstand = 2.5

let zinLetterAfstand = 0

// Tekst van zin
let zin = ""

// Lengte van zin
let zinLengte = 0

// Uitgeschreven berekening
let zinBerekening = ""



// ====================================================
// BEREKENINGEN
// ====================================================

// ----------------------------------------------------
// ZINSLENGTE BEREKENING VAN INGEVOERDE TEKST
// ----------------------------------------------------

$("#knopZinBerekenen").on("click", function() {
  // ----------------------------------------------------
  // VARIABELEN OPSLAAN UIT FORMULIER

  // Reset zinlengte en berekening
  zinLengte = 0;
  zinBerekening = "";

  // Sla ingevulde waarden uit formulier op
  zin = $("#formZin").val();
  letterafstand = $("#formLetterafstand").val();
  let penNibKeuze = $("#formPenNibSelectie").val();

  // ----------------------------------------------------
  // BEREKEN ZINSLENGTE

  // Zoek penNibKeuze op in penNibMap en haal bijbehorende multiplier op
  penNib = penNibMap.get(penNibKeuze);

  // Check of karakter uit zin voorkomt in karakterMap
  // Ja:
    // Zoekt ieder karakter uit de zin op in de karakterMap
    // Neemt de stroke breedte van het karakter
    // Telt dit op bij zinLengte
    // Voegt dit toe aan uitgeschreven berekening
  // Nee:
    // Alert met welk karakter niet voorkomt in map

  for (i=0; i<zin.length; i++) {
    if (karakterMap.has(zin.charAt(i))) {
      zinLengte += (karakterMap.get(zin.charAt(i))*penNib);
      zinBerekening += (karakterMap.get(zin.charAt(i))*penNib + " ");
    } else {
      alert("De zin bevat karakter: [" + zin.charAt(i) + "] . Daarvoor is geen lengte ingevoerd.")
    }
  };

  // Voeg letter ruimte toe (# karakters -1) * letterAfstand
  zinLengte += letterafstand * (zin.length - 1);

  // ----------------------------------------------------
  // HTML OUTPUT

  // Vul de zin eigenschappen en berekeningen in bij HTML output
  $("#zinTekst").text(zin);
  $("#zinPenNib").text(penNibKeuze);
  $("#zinLetterafstand").text(letterafstand);
  $("#zinLengte").text(zinLengte);
  $("#zinLengteHalf").text(zinLengte*0.5);
  $("#zinBerekening").text(zinBerekening);
});
