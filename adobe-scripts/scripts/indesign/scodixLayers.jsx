var activeDocument = app.activeDocument;


// var activeDocument = app.documents.add();
// activeDocument.name = "Layers Test";


// for (var i=0; i < 5; i++) {
//   makeLayers(i);
// }
//
// function makeLayers(layerName) {
//   var layers = activeDocument.layers;
//   var newLayer = layers.add();
//   newLayer.name = "Print" + layerName;
// }

function updateFirstLayerToPrint() {
  var layers = activeDocument.layers;
  var firstLayer = layers.itemByName("Layer 1");
  firstLayer.name = "Print";
  firstLayer.layerColor = [0,255,0];
}

function createScodixLayers() {
  var fileLayers = ["Scodix","Slug"];

  for (var i=0; i < fileLayers.length; i++) {
    var layers = activeDocument.layers;
    var newLayer = layers.add();
    newLayer.name = fileLayers[i];
    newLayer.layerColor = [255,0,0];
  }
}

function scodixSwatch() {
  var scodixProfiles = [
    {name:"Scodix", model: ColorModel.spot, colorValue:[0,100,0,0], space: ColorSpace.CMYK}
  ];
}

function addZundProfile(spotProfile) {
  var myColor = activeDocument.colors.item(spotProfile.name);
  try {
  	myName = myColor.name;
  }
  catch (myError){
  	//The color did not exist, so create it.
  	myColor = activeDocument.colors.add(spotProfile);
  }
}

updateFirstLayerToPrint();
createScodixLayers();
