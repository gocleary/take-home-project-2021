module.exports = {
  parser: "postcss-scss", // so we use inline comments in css
  plugins: [
    require('postcss-easy-import')({
      extensions: ['.css', '.scss']
    }), // resolves files with globs
    require('precss'), // lets us use Sass-like markup and staged CSS features in CSS.
    require('postcss-custom-properties') // CSS variables
  ]
}
