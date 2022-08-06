import { getPropertiesWithValues } from '@utils/getPropertiesWithValues'
import {
  ObjectValue,
  ProtoTypeObjectInfo,
  PrototypeChainProperties,
} from '@utils/types'

export function getPrototypeChainProperties(
  object: ObjectValue,
  level = 0
): PrototypeChainProperties {
  const Prototype = Object.getPrototypeOf(object)

  if (Prototype === null) {
    return {}
  }

  return {
    [`${level}`]: {
      properties: getPropertiesWithValues(Prototype),
      ...getPrototypeChainProperties(Prototype, ++level),
      type: typeof Prototype,
      name: Object.prototype.toString.call(Prototype),
      constructor: Prototype.constructor.name,
    },
  }
}

export function getFlatPrototypeChainProperties(
  object: ObjectValue
): ProtoTypeObjectInfo[] {
  const Prototype = Object.getPrototypeOf(object)

  if (Prototype === null) {
    return []
  }

  return [
    {
      type: typeof Prototype,
      name: Object.prototype.toString.call(Prototype),
      constructor: Prototype.constructor.name,
      properties: getPropertiesWithValues(Prototype),
    },
    getFlatPrototypeChainProperties(Prototype),
  ]
    .flat()
    .filter(Boolean)
}
