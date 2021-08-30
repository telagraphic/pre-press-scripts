// running on home computer, the indesign pdf outputs the strokes as fills, code below matches that
// wrap code in IIFE

// https://stackoverflow.com/questions/13959744/why-script-will-sometimes-launch-extendscript-toolkit-just-stall
// https://thetechwizy.blogspot.com/2017/07/i-was-recently-tasked-with-developing.html
// https://www.errorvault.com/en/troubleshooting/runtime-errors/adobe-systems-inc/adobe-illustrator/error-1200_illustrator-error-1200

(function() {

})();


#target illustrator
#targetengine main
var doc = app.activeDocument;
var layers = doc.layers;
var processLayers = [];
var swatches = doc.swatches;
var paths = doc.pathItems;
var zundPaths = [];
var zundDots = [];
var thruCutPaths = [];
var kissCutPaths = [];

// create layers
// loop through swatches and create layers to match against the configuration object
for (var i = 0; i < swatches.length; i++) {
  // ERROR 1200: 1346458189('MRAP') line 19
  if (swatches[i].name === "Cutcontour_Kiss-cut") {
    var newLayer = doc.layers.add();
    newLayer.name = "Kiss-cut";
  } else if (swatches[i].name === "Cutcontour_Thru-cut") {
    var newLayer = doc.layers.add();
    newLayer.name = "Thru-cut";
  } else if (swatches[i].name === "Cutcontour_Crease-cut") {
    var newLayer = doc.layers.add();
    newLayer.name = "Crease-cut";
  }
}


// sort paths by zund process and registration dots
for (var i = 0; i < paths.length; i++) {
  if (paths[i].stroked) {
    zundPaths.push(paths[i]);
  } else if (paths[i].filled) {
    zundDots.push(paths[i]);
  }
}


// move zund dots to layer
var registerLayer = doc.layers.add();
registerLayer.name = "Register";
for (var k = 0; k <= zundDots.length; k++) {
  alert(zundDots[k]);
  zundDots[k].move(registerLayer, ElementPlacement.PLACEATBEGINNING);
}

// sort zund process types
for (var j = 0; j <= zundPaths.length; j++) {
  var spotName = zundPaths[j].strokeColor.spot.name; //Error 21: undefined is not an object
  if (spotName === "Cutcontour_Thru-cut") {
    thruCutPaths.push(zundPaths[j]);
    var thruCutLayer = doc.layers.getByName("Thru-cut");
    zundPaths[j].move(thruCutLayer, ElementPlacement.PLACEATBEGINNING)
  } else if (spotName === "Cutcontour_Kiss-cut") {
    kissCutPaths.push(zundPaths[j]);
    var kissCutLayer = doc.layers.getByName("Kiss-cut");
    zundPaths[j].move(kissCutLayer, ElementPlacement.PLACEATBEGINNING);
  }
}



// remove layer
// var layerOne = doc.layers.getByName("Layer 1");
// layerOne.remove();
