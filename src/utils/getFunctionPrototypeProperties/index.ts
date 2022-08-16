import { getPropertiesWithValues } from '@utils/getPropertiesWithValues'
import { ObjectValue } from '@types'

export function getFunctionPrototypeProperties(object: ObjectValue) {
  if ('prototype' in object && typeof object === 'function') {
    return {
      ...getPropertiesWithValues(object.prototype),
    }
  }

  return 'Not a constructor'
}
