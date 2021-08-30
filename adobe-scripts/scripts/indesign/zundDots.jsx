// Set for .5" bleed file setups, create "Register" layer and adds 5 zund dots
// TODO: add dots on every page

// get current document size and page bounds
var docRef = app.activeDocument;
var pageRef = docRef.pages.item(0);
var pageBounds = pageRef.bounds;
var top = pageBounds[0], left = pageBounds[1], bottom = pageBounds[2], right = pageBounds[3];
// alert(pageBounds); // [0,0,2,2]


// Zund dot geometry positions
// [0,"-0.375",".25","-0.125"]; //[ topy, leftx, bottomy, rightx ]
var leftTopFirstDot = [0, left - .375, .25, -.125]; // 0,-.375,2.25,2.125
var leftTopSecondDot = [.375, left - .375, .625, -.125];
var rightDot = [0, right + .125, .25, right + .375]; // 0,2.125,.25,2.125
var leftBottomDot = [bottom - .25, -(left + .375), bottom, -.125]; // 1.75,.375,2,-.125
var rightBottomDot = [bottom - .25, right + .125, bottom, right + .375]; //

var registerLayer = app.activeDocument.layers.add();
registerLayer.name = "Register";

var boundsArray = [leftTopFirstDot,leftTopSecondDot,rightDot,leftBottomDot,rightBottomDot];
for (var i = 0; i < boundsArray.length; i ++) {
  cr = pageRef.ovals.add();
  cr.geometricBounds = boundsArray[i];
  cr.strokeColor = "None";
  cr.fillColor = "Black";
  cr.itemLayer = registerLayer;
}
