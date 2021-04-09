/* eslint max-classes-per-file: 0 */ // --> OFF
import { contrast, tint, shade } from 'utils/color'
import getPropertyListWithValues from 'components/customStyles/getPropertyValues'
import transformToCssVariable from 'utils/transformToCssVariable'

const dynamicColorVariables = [
  // Color vars used in linkText mixin
  '--dynamic-color-link-text--link-color',
  '--dynamic-color-link-text--danger-color',
  '--dynamic-color-link-text--highlight-color',
  '--dynamic-color-link-text--text-color-secondary',

  // Navbar hover items
  '--dynamic-color-navbar-item--nav-color',

  // Banner hover
  '--dynamic-color-banner-hover-text--banner-text-color',

  // Primary button
  '--dynamic-color-button-primary-active--btn-primary-color',
  '--dynamic-color-button-primary-hover--btn-primary-color',
  '--dynamic-color-button-primary-disabled--btn-primary-color',
  '--dynamic-color-button-primary-show-toggle--btn-primary-color',

  // Danger button
  '--dynamic-color-button-primary-active--danger-color',
  '--dynamic-color-button-primary-hover--danger-color',
  '--dynamic-color-button-primary-disabled--danger-color',
  '--dynamic-color-button-primary-show-toggle--danger-color',

  // Primary gray
  '--dynamic-color-button-primary-active--dark-gray',
  '--dynamic-color-button-primary-hover--dark-gray',
  '--dynamic-color-button-primary-disabled--dark-gray',
  '--dynamic-color-button-primary-show-toggle--dark-gray',

  // Secondary button
  '--dynamic-color-button-secondary-hover-border--btn-primary-color',
  '--dynamic-color-button-secondary-active-border--btn-primary-color',
  '--dynamic-color-button-secondary-disabled-border--btn-primary-color',
  '--dynamic-color-button-secondary-hover-color--btn-primary-color',
  '--dynamic-color-button-secondary-active-color--btn-primary-color',
  '--dynamic-color-button-secondary-disabled-color--btn-primary-color',


  // Secondary danger button
  '--dynamic-color-button-secondary-hover-border--danger-color',
  '--dynamic-color-button-secondary-active-border--danger-color',
  '--dynamic-color-button-secondary-disabled-border--danger-color',
  '--dynamic-color-button-secondary-hover-color--danger-color',
  '--dynamic-color-button-secondary-active-color--danger-color',
  '--dynamic-color-button-secondary-disabled-color--danger-color',

  // Muted button
  '--dynamic-color-button-muted-hover--btn-muted-color',
  '--dynamic-color-button-muted-active--btn-muted-color',
  '--dynamic-color-button-muted-disabled--btn-muted-color',

  // Close icon
  '--dynamic-color-close-icon--border-color',

  // Errors
  '--dynamic-color-input-textarea-error--error-color',
  '--dynamic-color-form-error-list--error-color',

  // Groups
  '--dynamic-color-group-current-link--link-color',

  // Cards
  '--dynamic-color-card-dropdown-item--card-background-color',

  // PRIMARY COLORS
  '--dynamic-color-primary-color-darker--highlight-color', // shade 15%
  '--dynamic-color-primary-color-darkest--highlight-color', // shade 10%
  '--dynamic-color-primary-color-light--highlight-color', // tint 15%
  '--dynamic-color-primary-color-lighter--highlight-color', // tint 30%
  '--dynamic-color-primary-color-lightest--highlight-color', // tint 85%

  // NEUTRAL COLORS
  '--dynamic-color-neutral-color-light--black', // tint 50%
  '--dynamic-color-neutral-color-lighter--black', // tint 75%
  '--dynamic-color-neutral-color-lightest--black', // tint 90%

  // SECONDARY COLORS
  '--dynamic-color-secondary-color-dark--secondary-gray', // shade 10%
  '--dynamic-color-secondary-color-lighter--secondary-gray', // tint 15%
  '--dynamic-color-secondary-color-lightest--secondary-gray', // tint 30%

  // BACKGROUND COLORS
  '--dynamic-color-background-color-darker--background-color', // tint 30%

  // quill
  '--dynamic-color-ql-snow-hover--background-color',
  '--dynamic-color-ql-editor-link--link-color',

  // photos
  '--dynamic-color-profile-photos--profile-photo-destroy-color',
  '--dynamic-color-profile-photos--profile-photo-promote-color',

  // Article Social
  '--dynamic-color-article-social--text-color-muted',
]

const colorFunctions = {
  // PRIMARY BUTTON STATES
  'button-primary-hover': baseColor => shade(baseColor, 10), // color(var(--primary-button-color|--danger-color|--dark-color) shade(10%));
  'button-primary-active': baseColor => tint(baseColor, 15), // color(var(--primary-button-color|--danger-color|--dark-color) tint(15%));
  'button-primary-disabled': baseColor => tint(baseColor, 30), // color(var(--primary-button-color|--danger-color|--dark-color) tint(30%));
  'button-primary-show-toggle': baseColor => shade(baseColor, 15), // color(var(--primary-button-color|--danger-color|--dark-color) shade(15%));

  // SECONDARY (BORDERED) BUTTON STATES
  'button-secondary-hover-border': baseColor => shade(baseColor, 10), // color(var(#{$btn-color}) shade(10%));
  'button-secondary-active-border': baseColor => tint(baseColor, 15), // color(var(#{$btn-color}) tint(15%));
  'button-secondary-disabled-border': baseColor => tint(baseColor, 30), // color(var(#{$btn-color}) tint(30%));
  'button-secondary-hover-color': baseColor => shade(baseColor, 10), // color(var(#{$btn-color}) shade(10%));
  'button-secondary-active-color': baseColor => tint(baseColor, 15), // color(var(#{$btn-color}) tint(15%));
  'button-secondary-disabled-color': baseColor => tint(baseColor, 30), // color(var(#{$btn-color}) tint(30%));

  // MUTED BUTTON
  'button-muted-hover': baseColor => shade(baseColor, 10),
  'button-muted-active': baseColor => tint(baseColor, 15),
  'button-muted-disabled': baseColor => tint(baseColor, 30),

  // QUILL
  'ql-snow-hover': baseColor => tint(baseColor, 5), // color(var(--background-color) blackness(5%));
  'ql-editor-link': baseColor => shade(baseColor, 25), // color(var(--link-color) shade(25%)) !important;

  // ERRORS
  'input-textarea-error': baseColor => tint(baseColor, 85), // color(--error-color tint(85%));
  'form-error-list': baseColor => tint(baseColor, 85), // color(--error-color tint(85%));

  // GLOBAL
  'link-text': baseColor => shade(baseColor, 25), // color(var(#{$color}) shade(25%));
  'close-icon': baseColor => shade(baseColor, 25), // color(var(--border-color) shade(25%))
  'navbar-item': baseColor => contrast(baseColor), // color(var(--nav-color) contrast(10%) blend(var(--nav-color) 70%));

  // OTHER COMPONENTS
  'banner-hover-text': baseColor => shade(baseColor, 15), // color(var(--banner-text-color) shade(15%));
  'group-current-link': baseColor => shade(baseColor, 35), // color(var(--link-color) shade(35%));
  'card-dropdown-item': baseColor => shade(baseColor, 5), // color(var(--card-background-color) shade(5%));
  'profile-photos': baseColor => tint(baseColor, 25),

  // ARTICLE SOCIAL
  'article-social': baseColor => tint(baseColor, 80),

  // PRIMARY COLORS
  'primary-color-darker': baseColor => shade(baseColor, 15),
  'primary-color-darkest': baseColor => shade(baseColor, 10),
  'primary-color-light': baseColor => tint(baseColor, 15),
  'primary-color-lighter': baseColor => tint(baseColor, 30),
  'primary-color-lightest': baseColor => tint(baseColor, 85),

  // NEUTRAL COLORS
  'neutral-color-light': baseColor => tint(baseColor, 50),
  'neutral-color-lighter': baseColor => tint(baseColor, 75),
  'neutral-color-lightest': baseColor => tint(baseColor, 90),

  // SECONDARY COLORS
  'secondary-color-dark': baseColor => shade(baseColor, 10),
  'secondary-color-lighter': baseColor => tint(baseColor, 15),
  'secondary-color-lightest': baseColor => tint(baseColor, 30),

  // BACKGROUND COLORS
  'background-color-darker': baseColor => shade(baseColor, 5), // color(var(--background-color) shade(5%));
}

/**
 * Generates tinted, shaded and other dynamic colors based on theme variables
 */
class DynamicStyles {
  // Generates computed colors off a base color value declared with css variables,
  //
  // ex: primary button color:
  // --dynamic-color-button-primary-active--btn-primary-color'
  // --dynamic-color-button-primary-hover--btn-primary-color'
  // --dynamic-color-button-primary-disabled--btn-primary-color'
  // --dynamic-color-button-primary-show-toggle--btn-primary-color'
  static init = () => {
    const rootElement = document.documentElement

    // Regex to split custom css property into groups
    const regex = new RegExp(/--dynamic-color-(.+)(--.+)/)
    const rootElementComputedStyle = getComputedStyle(rootElement)

    dynamicColorVariables.forEach((property) => {
      // Get property identifier (ql-editor-lin, button-secondary-disabled-color) and the color
      // it uses as its base.
      const [, propertyIdentifier, baseColor] = regex.exec(property)
      const baseColorValue = rootElementComputedStyle.getPropertyValue(baseColor.trim()).trim()

      // Invoke function that calculates the color for a specific property
      const generatedColor = colorFunctions[propertyIdentifier](baseColorValue)

      rootElement.style.setProperty(property, generatedColor)
    })
  }
}

/**
 * Applies db stored style variables
 */
class ThemeStyles {
  static async init(variables = {}) {
    const rootElement = document.documentElement
    const {
      colors = {},
      fonts = {},
      border = {},
      fontWeight = {},
      textTransform = {},
      boxShadow = {},
      dimensions = {},
    } = variables

    const colorVariables = getPropertyListWithValues({ variables: colors, type: 'colors' })
    const fontVariables = getPropertyListWithValues({ variables: fonts, type: 'fonts' })
    const borderRadiusVariables = getPropertyListWithValues({ variables: border, type: 'border' })
    const fontWeightVariables = getPropertyListWithValues({ variables: fontWeight, type: 'fontWeight' })
    const textTransformationVariables = getPropertyListWithValues({ variables: textTransform, type: 'textTransform' })
    const navBoxShadow = getPropertyListWithValues({ variables: boxShadow, type: 'boxShadow' })
    const dimensionVariables = getPropertyListWithValues({ variables: dimensions, type: 'dimensions' })

    const extractedCssProperties = [
      ...colorVariables,
      ...fontVariables,
      ...borderRadiusVariables,
      ...fontWeightVariables,
      ...textTransformationVariables,
      ...navBoxShadow,
      ...dimensionVariables,
    ]

    extractedCssProperties.forEach(([property, value]) => {
      let colorValue = value

      if (property.includes('Color')) {
        const isAColor = new RegExp(/#.{3,7}|(rgba?\(.+\))|(hsla?\(.+\))/)

        if (!isAColor.test(colorValue)) {
          const styles = getComputedStyle(document.documentElement)
          colorValue = styles.getPropertyValue(`--${colorValue}`).trim()
        }

        return rootElement.style.setProperty(transformToCssVariable(property), colorValue)
      }
      return rootElement.style.setProperty(transformToCssVariable(property), value)
    })
  }
}

/**
 * Injects css overrides, applies theme variables and  generates dynamic color variables
 */
class Styles {
  static init(styles) {
    const { variables, cssOverrides } = styles
    const styleTag = document.createElement('style')
    document.head.appendChild(styleTag)

    styleTag.type = 'text/css'
    styleTag.id = 'cssOverrides'
    styleTag.innerHTML = '\n' + cssOverrides
    document.body.appendChild(styleTag)

    ThemeStyles.init(variables)
    // ThemeStyles.init(variables).then(DynamicStyles.init)
  }
}

export { Styles, ThemeStyles }
