
// load zun spot profiles for digital
var docRef = app.activeDocument;

// create new spot color
var cmykColor = new CMYKColor();
cmykColor.cyan = 0;
cmykColor.magenta = 0;
cmykColor.yellow = 0;
cmykColor.black = 100;
// add spot color to spot swatches
var spot = docRef.spots.add();
spot.color = cmykColor;
spot.colorType = ColorModel.SPOT;
spot.name = "Cutcontour_Register";

var cmykColor = new CMYKColor();
cmykColor.cyan = 100;
cmykColor.magenta = 0;
cmykColor.yellow = 100;
cmykColor.black = 0;
var spot = docRef.spots.add();
spot.color = cmykColor;
spot.colorType = ColorModel.SPOT;
spot.name = "Cutcontour_Crease";

var cmykColor = new CMYKColor();
cmykColor.cyan = 100;
cmykColor.magenta = 0;
cmykColor.yellow = 0;
cmykColor.black = 0;
var spot = docRef.spots.add();
spot.color = cmykColor;
spot.colorType = ColorModel.SPOT;
spot.name = "Cutcontour_Kiss-cut";

var cmykColor = new CMYKColor();
cmykColor.cyan = 0;
cmykColor.magenta = 100;
cmykColor.yellow = 100;
cmykColor.black = 0;
var spot = docRef.spots.add();
spot.color = cmykColor;
spot.colorType = ColorModel.SPOT;
spot.name = "Cutcontour_Thru-cut";

var cmykColor = new CMYKColor();
cmykColor.cyan = 75;
cmykColor.magenta = 100;
cmykColor.yellow = 0;
cmykColor.black = 0;
var spot = docRef.spots.add();
spot.color = cmykColor;
spot.colorType = ColorModel.SPOT;
spot.name = "Cutcontour_Route";

var cmykColor = new CMYKColor();
cmykColor.cyan = 0;
cmykColor.magenta = 50;
cmykColor.yellow = 100;
cmykColor.black = 0;
var spot = docRef.spots.add();
spot.color = cmykColor;
spot.colorType = ColorModel.SPOT;
spot.name = 'Cutcontour_Engrave';

var cmykColor = new CMYKColor();
cmykColor.cyan = 0;
cmykColor.magenta = 100;
cmykColor.yellow = 0;
cmykColor.black = 0;
var spot = docRef.spots.add();
spot.color = cmykColor;
spot.colorType = ColorModel.SPOT;
spot.name = "Cutcontour_Score";

var cmykColor = new CMYKColor();
cmykColor.cyan = 35;
cmykColor.magenta = 60;
cmykColor.yellow = 80;
cmykColor.black = 25;
var spot = docRef.spots.add();
spot.color = cmykColor;
spot.colorType = ColorModel.SPOT;
spot.name = "Cutcontour_Drill";

var cmykColor = new CMYKColor();
cmykColor.cyan = 36;
cmykColor.magenta = 0;
cmykColor.yellow = 100;
cmykColor.black = 6;
var spot = docRef.spots.add();
spot.color = cmykColor;
spot.colorType = ColorModel.SPOT;
spot.name = "Cutcontour_V-cut";

var cmykColor = new CMYKColor();
cmykColor.cyan = 0;
cmykColor.magenta = 27;
cmykColor.yellow = 100;
cmykColor.black = 0;
var spot = docRef.spots.add();
spot.color = cmykColor;
spot.colorType = ColorModel.SPOT;
spot.name = "Cutcontour_Bevel-cut";

var cmykColor = new CMYKColor();
cmykColor.cyan = 0;
cmykColor.magenta = 100;
cmykColor.yellow = 0;
cmykColor.black = 0;
var spot = docRef.spots.add();
spot.color = cmykColor;
spot.colorType = ColorModel.SPOT;
spot.name = "Spot1";

var cmykColor = new CMYKColor();
cmykColor.cyan = 0;
cmykColor.magenta = 100;
cmykColor.yellow = 0;
cmykColor.black = 0;
var spot = docRef.spots.add();
spot.color = cmykColor;
spot.colorType = ColorModel.SPOT;
spot.name = "White Ink";

var cmykColor = new CMYKColor();
cmykColor.cyan = 0;
cmykColor.magenta = 100;
cmykColor.yellow = 0;
cmykColor.black = 0;
var spot = docRef.spots.add();
spot.color = cmykColor;
spot.colorType = ColorModel.SPOT;
spot.name = "Scodix";
