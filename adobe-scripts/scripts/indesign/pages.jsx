// Set for .5" bleed file setups, create "Register" layer and adds 5 zund dots
// TODO: add dots on every page

// get current document size and page bounds
var activeDocument = app.activeDocument;
var documentPages = activeDocument.pages;
var count = documentPages.length;
// alert(count);


for (var i = 0; i < documentPages.length; i++) {
  // alert(documentPages[i].toSource());
  var page = documentPages[i];
  var layers = page.bounds;
  alert(layers);
}
