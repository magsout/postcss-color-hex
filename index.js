/**
 * Module dependencies.
 */
var colorString = require("color-string");
/**
 * Constantes
 */
const RGBA = /rgba\s*\((\s*(\d+)\s*(,)\s*){3}(\s*(\d?\.\d+)\s*)\)$/i

/**
 * PostCSS plugin to transform rgba() to hex color
 */
module.exports = function plugin() {
  return function(style) {
    style.eachDecl(function transformDecl(decl) {
      if (!decl.value || decl.value.indexOf("rgba") === -1) {
        return
      }
      var value = transformRgba(decl.value)
      if (value) {
        decl.cloneBefore({value: value});
      }
    })
  }
}

/**
 * transform rgba() to Hex.
 *
 * @param  {String} string declaration value
 * @return {String}        converted declaration value to hex
 */
function transformRgba(string) {
  var value = RGBA.exec(string)

  if (!value) {
    return
  }
  var rgb = colorString.getRgb(value[0])
  var hex = colorString.hexString(rgb)
  hex = string.replace(RGBA, hex)

  return (hex)
}
