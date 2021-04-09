import chroma from 'chroma-js'

const Color = require('color')

function blend({ color, otherColor, percentage }) {
  const mainColor = Color(color)
  const targetAlpha = mainColor.alpha()

  // Reset the alpha value to one. This is required because color.mix mixes
  // the alpha value as well as rgb values. For blend() purposes, that's not
  // what we want.
  mainColor.alpha(1)

  const other = new Color(otherColor)
  const blendAmount = parseInt(percentage) / 100

  // Finally set the alpha value of the mixed color to the target value.
  return mainColor
    .mix(other, blendAmount)
    .alpha(targetAlpha)
    .round()
}

function contrast(baseColor) {
  const mixWith = chroma(baseColor).luminance() < 1 ? 'white' : 'black'
  return blend({ color: baseColor, otherColor: mixWith, percentage: 20 }).hex()
}

function shade(color, percentage) {
  return blend({ color, otherColor: 'black', percentage }).hex()
}

function tint(color, percentage) {
  return blend({ color, otherColor: 'white', percentage }).hex()
}

export {
  blend, contrast, shade, tint
}
