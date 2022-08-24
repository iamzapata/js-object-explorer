import { ObjectInfo, ObjectValue } from '@types'
import { getFunctionPrototypeProperties } from '@utils/getFunctionPrototypeProperties'
import { getPropertiesWithValues } from '@utils/getPropertiesWithValues'
import {
  getFlatPrototypeChainProperties,
  getPrototypeChainProperties,
} from '@utils/getPrototypeChainProperties'

export function getObjectInformation(obj: ObjectValue) {
  const ownProperties = getPropertiesWithValues(obj)

  const prototype = getFunctionPrototypeProperties(obj)

  const prototypeChainProperties = getPrototypeChainProperties(obj)

  const flatPrototypeChainProperties = getFlatPrototypeChainProperties(obj)

  const objectInfo: ObjectInfo = {
    '[[Prototype]]': Object.getPrototypeOf(obj),
    constructor: obj.constructor.name,
    prototype,
    ownProperties,
    prototypeChainProperties,
    flatPrototypeChainProperties,
  }

  if ('name' in obj) {
    objectInfo.name = obj.name
  }

  return objectInfo
}
