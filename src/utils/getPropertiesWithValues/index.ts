import { ObjectProperties, ObjectValue } from '@types'

const PROBLEMATIC_PROPERTIES: string[] = [
  'description',
  'caller',
  'callee',
  'arguments',
]

const isProblematicProperty = (property: string) => {
  return PROBLEMATIC_PROPERTIES.includes(property)
}

const patchProperty = (accum: ObjectProperties, key: string) => {
  if (accum) {
    accum[`${key}`] = { isProblematic: true }
    return accum
  }
}

const init: ObjectProperties = {}

export function getPropertiesWithValues(object: ObjectValue): ObjectProperties {
  const propList = Object.getOwnPropertyNames(object).sort()

  return propList.reduce((accum, nextKey) => {
    if (isProblematicProperty(nextKey)) {
      patchProperty(accum, nextKey)
      return accum
    }

    const value: ObjectValue = object[nextKey as keyof ObjectValue]

    return { ...accum, [nextKey]: value }
  }, init)
}
