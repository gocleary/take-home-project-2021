import supportedVariables from 'components/customStyles/supportedVariables'
import transformToCssVariable from 'utils/transformToCssVariable'

const styles = getComputedStyle(document.documentElement)

const getPropertyValue = propertyName => styles.getPropertyValue(transformToCssVariable(propertyName)).trim()

/**
 * Takes care of getting the property value from  database or from default css var
 */
const getPropertyListWithValues = ({ variables, type }) => {
  const variableListByType = supportedVariables.variables[type]

  let propertiesWithValues = Object.values(variableListByType).map((propertyName) => {
    const propertyValue = getPropertyValue(propertyName)

    if (variables[propertyName]) return [propertyName, variables[propertyName]]

    return [propertyName, propertyValue]
  })

  // We want to apply the variables that have actual colors before the ones that reference other values
  // So we order them in a way that the variables that reference other variables are at the end.
  // before = {'a-color': 'red', 'c-color': 'b-color', 'b-color': 'blue', 'd-color': 'white'}
  // after = {'a-color': 'red', 'b-color': 'blue', 'd-color': 'white', 'c-color': 'b-color'}
  if (type === 'colors') {
    propertiesWithValues = _.sortBy(
      Object.entries(propertiesWithValues),
      ([, arrayValue]) => !new RegExp(/#.{3,7}|(rgba?\(.+\))|(hsla?\(.+\))/).test(arrayValue[1])
    ).map(([, arrayValue]) => arrayValue)
  }

  return propertiesWithValues
}

export default getPropertyListWithValues
