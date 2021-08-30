var newDocument = app.activeDocument;


// var newDocument = app.documents.add();
// newDocument.name = "Layers Test";


// for (var i=0; i < 5; i++) {
//   makeLayers(i);
// }
//
// function makeLayers(layerName) {
//   var layers = newDocument.layers;
//   var newLayer = layers.add();
//   newLayer.name = "Print" + layerName;
// }

function updateFirstLayer() {
  var layers = newDocument.layers;
  var firstLayer = layers.itemByName("Layer 1");
  firstLayer.name = "Print";
  firstLayer.layerColor = [0,255,0];
}

function makeDigitalLayers() {
  var traditionalLayers = ["Scodix","Score", "Kiss-cut", "Thru-cut", "Crease", "Slug", "Register"];

  for (var i=0; i < traditionalLayers.length; i++) {
    var layers = newDocument.layers;
    var newLayer = layers.add();
    newLayer.name = traditionalLayers[i];
    newLayer.layerColor = [255,0,0];
  }
}

function addBleedAmount(bleedAmount) {
  newDocument.documentBleedBottomOffset = bleedAmount;
  newDocument.documentBleedInsideOrLeftOffset = bleedAmount;
  newDocument.documentBleedOutsideOrRightOffset = bleedAmount;
  newDocument.documentBleedTopOffset = bleedAmount;
}

updateFirstLayer();
makeDigitalLayers();
addBleedAmount(.0625);
