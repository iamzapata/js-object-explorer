import { ObjectValue, ValueAndType } from '@utils/types'

const KEYS_TO_IGNORE = ['caller', 'callee', 'arguments']

export function getPropertiesWithValues(object: ObjectValue) {
  const propList = Object.getOwnPropertyNames(object).sort()

  return propList.reduce((accum, nextKey) => {
    if (KEYS_TO_IGNORE.includes(nextKey)) return accum

    const value: ObjectValue = object[nextKey as keyof ObjectValue]
    const type = typeof value

    const valueAndType: ValueAndType = {
      value: value,
      type,
    }

    return { ...accum, [nextKey]: { ...valueAndType } }
  }, {})
}
