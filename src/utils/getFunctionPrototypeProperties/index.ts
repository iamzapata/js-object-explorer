import { getPropertiesWithValues } from '@utils/getPropertiesWithValues'
import { getPrototypeChainProperties } from '@utils/getPrototypeChainProperties'
import { ObjectValue } from '@utils/types'

export function getFunctionPrototypeProperties(object: ObjectValue) {
  if ('prototype' in object && typeof object === 'function') {
    return {
      ownProperties: getPropertiesWithValues(object),
      prototypeChainProperties: getPrototypeChainProperties(object),
    }
  }

  return undefined
}
