// const body = document.querySelector("body")
let lummus = 0

try {
  body.style.backgroundColor = lumiance("#6232cc", lummus)
} catch(e) {
  console.log("Houve um erro: ", e.message);
}

function lumiance(hex, luminosity = 0) {

  hex = hex.replace(/[^0-9a-f]/gi, '')
  const isValidHex = hex.length === 6 || hex.length === 3
  if(!isValidHex) throw new Error("Invalid HEX")

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  const black = 0;
  const white = 255;

  const twoDigitGroup = hex.match(/([0-9a-f]){2}/gi)


  let newHex = "#"

  for(let twoDigit of twoDigitGroup) {
    const numberFromHex = parseInt(twoDigit, 16)
    const calculateLuminosity = numberFromHex + (luminosity * white)

    const blackOrLuminosity = Math.max(black, calculateLuminosity)
    const partialColor = Math.min(white, blackOrLuminosity)
    const newColor = Math.round(partialColor)

    const numberToHex = newColor.toString(16)
    const finalHex = `0${numberToHex}`.slice(-2)

    newHex = newHex + finalHex
  }

  return newHex
}


// Controlar o Slider com JS
var $slider = $("#slider");
var $fill = $(".bar .fill");

function setBar() {
	$fill.css("width", $slider.val() + "%");
}

$slider.on("input", setBar);

setBar();
