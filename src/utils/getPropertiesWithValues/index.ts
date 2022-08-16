import { ObjectValue, ValueAndType } from '@types'

const PROBLEMATIC_PROPERTIES: string[] = [
  'description',
  'caller',
  'callee',
  'arguments',
]

const isProblematicProperty = (property: string) => {
  return PROBLEMATIC_PROPERTIES.includes(property)
}

const patchProperty = (accum: unknown, key: string) => {
  accum[`${key}`] = 'Throws TypeError'
  return accum
}

export function getPropertiesWithValues(
  object: ObjectValue
): Record<string, unknown> {
  const propList = Object.getOwnPropertyNames(object).sort()

  return propList.reduce((accum, nextKey) => {
    if (isProblematicProperty(nextKey)) {
      patchProperty(accum, nextKey)
      return accum
    }

    const value: ObjectValue = object[nextKey as keyof ObjectValue]
    const type = typeof value

    const valueAndType: ValueAndType = {
      value: value,
      type,
    }

    return { ...accum, [nextKey]: { ...valueAndType } }
  }, {})
}
