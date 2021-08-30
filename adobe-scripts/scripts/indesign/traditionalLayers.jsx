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
}

function makeTraditionalLayers() {
  var traditionalLayers = ["Foil", "Engraving", "Die"];

  for (var i=0; i < traditionalLayers.length; i++) {
    var layers = newDocument.layers;
    var newLayer = layers.add();
    newLayer.name = traditionalLayers[i];
  }
}

updateFirstLayer();
makeTraditionalLayers();
