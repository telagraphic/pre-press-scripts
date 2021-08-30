var activeDocument = app.activeDocument;

var zundProfiles = [
  {name:"Cutcontour_Bevel-cut", model: ColorModel.spot, colorValue:[0,27,100,0], space: ColorSpace.CMYK},
  {name:"Cutcontour_V-cut", model: ColorModel.spot, colorValue:[36,0,100,6], space: ColorSpace.CMYK},
  {name:"Cutcontour_Drill", model: ColorModel.spot, colorValue:[35,60,80,25], space: ColorSpace.CMYK},
  {name:"Cutcontour_Score", model: ColorModel.spot, colorValue:[0,100,0,0], space: ColorSpace.CMYK},
  {name:"Cutcontour_Engrave", model: ColorModel.spot, colorValue:[0,50,100,0], space: ColorSpace.CMYK},
  {name:"Cutcontour_Route", model: ColorModel.spot, colorValue:[75,100,0,0], space: ColorSpace.CMYK},
  {name:"Cutcontour_Kiss-cut", model: ColorModel.spot, colorValue:[100,0,0,0], space: ColorSpace.CMYK},
  {name:"Cutcontour_Thru-cut", model: ColorModel.spot, colorValue:[0,100,100,0], space: ColorSpace.CMYK},
  {name:"Cutcontour_Crease", model: ColorModel.spot, colorValue:[100,0,100,0], space: ColorSpace.CMYK},
  {name:"Cutcontour_Register", model: ColorModel.spot, colorValue:[0,0,0,100], space: ColorSpace.CMYK},
  {name:"Spot1", model: ColorModel.spot, colorValue:[0,100,0,0], space: ColorSpace.CMYK},
  {name:"White Ink", model: ColorModel.spot, colorValue:[0,100,0,0], space: ColorSpace.CMYK},
  {name:"Scodix", model: ColorModel.spot, colorValue:[0,100,0,0], space: ColorSpace.CMYK}
];

for (var i=0; i < zundProfiles.length; i++) {
  addZundProfile(zundProfiles[i]);
}

function addZundProfile(spotProfile) {
  var myColor = activeDocument.colors.item(spotProfile.name);
  try {
  	myName = myColor.name;
  }
  catch (myError){
  	myColor = activeDocument.colors.add(spotProfile);
  }
}
