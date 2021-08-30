// var document = app.activeDocument;

var newDocument = app.documents.add();
newDocument.name = "Layers Test";

// var swatches = app.swatches;
//
// for (var i=0; i < swatches.length; i++) {
//   alert.swatches[i].name;
//   console.log(swatches[i].name);
// }

// var newPage = pages.add();
// var newLayer = layers.add();
// newLayer.name = "Print";
//
// var newTextFrame = newPage.textFrames.add();
// newTextFrame.contents = "My Brand New Text";
// newTextFrame.geometricBounds = [5,5,10,10];


for (var i=0; i < 5; i++) {
  makeLayers(i);
}

function makeLayers(layerName) {
  var layers = newDocument.layers;
  var newLayer = layers.add();
  newLayer.name = "Print" + layerName;
}

function updateFirstLayer() {

}

var traditionalLayers = ["Print", "Foil", "Engraving", "Die"]
