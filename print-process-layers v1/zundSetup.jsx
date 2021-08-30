// running on home computer, the indesign pdf outputs the strokes as fills, code below matches that
// will need to modify for filtering on strokes
// wrap code in IIFE to avoid loop bugs with array variables

var doc = app.activeDocument;
var swatches = doc.swatches;
var paths = doc.pathItems;
var zundPaths = [];
var zundDots = [];
var thruCutPaths = [];
var kissCutPaths = [];

var layers = doc.layers; //[Register, Thru-cut, Kiss-cut]
for (var i = 0; i < layers.length; i++) {
  // alert(layers[i].name);
}

// sort paths by zund process and registration dots
// for (var i = 0; i < paths.length; i++) {
//   if (paths[i].stroked) {
//     zundPaths.push(paths[i]);
//   } else if (paths[i].filled) {
//     zundDots.push(paths[i]);
//   }
// }

for (var i = 0; i < paths.length; i++) {
  if (paths[i].stroked) {
    zundPaths.push(paths[i]);
  } else if (paths[i].filled) {
    // alert(paths[i].fillColor);
    zundDots.push(paths[i]);
  }
}

// alert(zundDots.length);

// sort zund process types
// for (var j = 0; j <= zundPaths.length; j++) {
//   var spotName = zundPaths[j].strokeColor.spot.name;
//   if (spotName === "Thru-cut") {
//     thruCutPaths.push(zundPaths[j]);
//   } else if (spotName === "Kiss-cut") {
//     kissCutPaths.push(zundPaths[j]);
//   }
// }


// alert(zundPaths.length);
// sort zund process types
var spotColors = [];
for (var j = 0; j <= zundDots.length; j++) {
  var colorType = zundDots[j].fillColor.typename;

  if (colorType === "SpotColor") {
    spotColors.push(zundDots[j]);
  }

  // if (spotName === "Thru-cut") {
  //   thruCutPaths.push(zundDots[j]);
  // } else if (spotName === "Kiss-cut") {
  //   kissCutPaths.push(zundDots[j]);
  // }
}


for (var j = 0; j <= spotColors.length; j++) {
  alert(spotColors[j]);
  // var pathItem = spotColors[j].fillColor.typename;

}
