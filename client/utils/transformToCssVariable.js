const transformToCssVariable = (property) => {
  if (!property) return '--missing-value'

  const isAHeading = new RegExp(/(h[1-6])(.+)/)

  if (isAHeading.test(property)) {
    const [, heading, propName] = isAHeading.exec(property)

    return `--${heading}-${_.kebabCase(propName)}`
  }

  return `--${_.kebabCase(property)}`
}

export default transformToCssVariable
