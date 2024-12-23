function calculateVolume() {
    // Get the values of length, width, and height inputs
    var length = parseFloat(document.getElementById('length').value);
    var width = parseFloat(document.getElementById('width').value);
    var height = parseFloat(document.getElementById('height').value);

    // Calculate the volume in cubic inches
    var volume = length * width * height;

    // Convert cubic inches to gallons (1 gallon = 231 cubic inches)
    var gallons = volume / 231;

    // Display the result
    document.getElementById('result').innerHTML = "Tank Volume: " + volume.toFixed(2) + " cubic inches<br>" +
        "Gallons: " + gallons.toFixed(2) + " gallons";
}

window.onscroll = function() {stickyNavbar()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
function convertCmToM() {
    var cm = parseFloat(document.getElementById('cmToM').value);
    var m = cm / 100;
    document.getElementById('resultCmToM').innerHTML = m + " meters";
}

function convertMToCm() {
    var m = parseFloat(document.getElementById('mToCm').value);
    var cm = m * 100;
    document.getElementById('resultMToCm').innerHTML = cm + " centimeters";
}

function convertInToCm() {
    var inches = parseFloat(document.getElementById('inToCm').value);
    var cm = inches * 2.54;
    document.getElementById('resultInToCm').innerHTML = cm + " centimeters";
}

function convertCmToIn() {
    var cm = parseFloat(document.getElementById('cmToIn').value);
    var inches = cm / 2.54;
    document.getElementById('resultCmToIn').innerHTML = inches + " inches";
}

function convertGalToLiters() {
    var gal = parseFloat(document.getElementById('galToLiters').value);
    var liters = gal * 3.78541;
    document.getElementById('resultGalToLiters').innerHTML = liters + " liters";
}

function convertLitersToGal() {
    var liters = parseFloat(document.getElementById('litersToGal').value);
    var gal = liters / 3.78541;
    document.getElementById('resultLitersToGal').innerHTML = gal + " gallons";
}
// Your existing conversion functions...

function backToHomepage() {
    window.location.href = "fishcalcs.html"; // Replace "index.html" with the actual path to your homepage
}
function calculate() {
    var length = parseFloat(document.getElementById('length').value);
    var width = parseFloat(document.getElementById('width').value);
    var height = parseFloat(document.getElementById('height').value);
    var substrateDepth = parseFloat(document.getElementById('substrateDepth').value);

    var gallons = (length * width * height) / 231;
    var volume = length * width * 144;
    var fish = Math.floor(length * width * height / (144 * 6));
    var stressZyme = gallons / 10 * 5; // 5ml per 10 gallons

    document.getElementById('gallons').textContent = gallons.toFixed(2) + " gallons";
    document.getElementById('volume').textContent = volume.toFixed(2) + " sq inches";
    document.getElementById('fish').textContent = fish + " fish";
    document.getElementById('stressZyme').textContent = stressZyme.toFixed(2) + " ml";
}
