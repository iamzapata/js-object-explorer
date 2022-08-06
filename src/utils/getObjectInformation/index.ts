import { ObjectInfo, ObjectValue } from './types'
import { getFunctionPrototypeProperties } from '@utils/getFunctionPrototypeProperties'
import { getPropertiesWithValues } from '@utils/getPropertiesWithValues'
import {
  getFlatPrototypeChainProperties,
  getPrototypeChainProperties,
} from '@utils/getPrototypeChainProperties'

const OBJECT_DESCRIPTION_MAP: { [key: string]: string } = {
  Object: 'Object constructor function',
}

export function getObjectInformation(obj: ObjectValue) {
  const ownProperties = getPropertiesWithValues(obj)

  const functionPrototypeProperties = getFunctionPrototypeProperties(obj)

  const prototypeChainProperties = getPrototypeChainProperties(obj)

  const flatPrototypeChainProperties = getFlatPrototypeChainProperties(obj)

  const objectInfo: ObjectInfo = {
    '[[Prototype]]': Object.getPrototypeOf(obj),
    constructor: obj.constructor.name,
    type: typeof obj,
    prototype: functionPrototypeProperties,
    ownProperties,
    prototypeChainProperties,
    flatPrototypeChainProperties,
  }

  if ('name' in obj) {
    objectInfo.name = obj.name
    objectInfo.description = OBJECT_DESCRIPTION_MAP[obj.name as string]
  }

  return objectInfo
}
