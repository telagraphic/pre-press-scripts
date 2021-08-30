// create separate layers for each zund process, copy paths and remove original layer

var docRef = app.activeDocument;
var swatches = docRef.spots; // var swatches = docRef.swatches;


var pathItems = docRef.pathItems[10].strokeColor;
alert(pathItems.spot); // "pathItems"



var swatch = swatches[10].name;

for (var i=0; i < swatches.length; i++) {

  if (swatches[i].name === "Cutcontour_Thru-cut") {
    setupThruCut();
  } else if (swatches[i].name === "Cutcontour_Kiss-cut") {
    setupKissCut();
  }
}


function setupThruCut() {
  // alert("We have a match");
}


function setupKissCut() {
  // alert("We have a match");
}
