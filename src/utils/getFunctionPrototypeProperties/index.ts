import { ObjectValue } from '@types'
import { getPropertiesWithValues } from '@utils/getPropertiesWithValues'

export function getFunctionPrototypeProperties(object: ObjectValue) {
  if ('prototype' in object && typeof object === 'function') {
    return {
      ...getPropertiesWithValues(object.prototype),
    }
  }

  return null
}
