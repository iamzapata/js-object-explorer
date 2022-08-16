export type Properties =
  | undefined
  | {
      [key: string]: Record<string, unknown> | undefined
    }

export interface ValueAndType {
  key: string
  value: PrimitiveValue | ObjectValue
}

export type PrimitiveValue =
  | string
  | number
  | bigint
  | boolean
  | symbol
  | null
  | undefined

export type PrototypeChainProperties = {
  [key: string]: PrototypeChainProperties | ProtoTypeObjectInfo
}

export interface ProtoTypeObjectInfo {
  properties: Properties
  type: string
  name: string
  constructor: string
}

export interface ObjectInfo {
  '[[Prototype]]': ObjectValue
  name?: string
  type: string
  constructor: string
  ownProperties: Properties
  prototype: Properties
  prototypeChainProperties: PrototypeChainProperties
  flatPrototypeChainProperties: ProtoTypeObjectInfo[]
}

export type FundamentalObject =
  | typeof Object
  | typeof Function
  | typeof Boolean
  | typeof Symbol

export type ErrorObject =
  | typeof Error
  | typeof AggregateError
  | typeof EvalError
  | typeof RangeError
  | typeof ReferenceError
  | typeof SyntaxError
  | typeof TypeError
  | typeof URIError

type NumberObject = typeof Number | typeof BigInt | typeof Math

type DateObject = typeof Date

type TextObject = typeof String | typeof RegExp

type IndexedCollectionObject =
  | typeof Array
  | typeof Int8Array
  | typeof Uint8Array
  | typeof Uint8ClampedArray
  | typeof Int16Array
  | typeof Uint16Array
  | typeof Int32Array
  | typeof Uint32Array
  | typeof Float32Array
  | typeof Float64Array
  | typeof BigInt64Array
  | typeof BigUint64Array

export type KeyedCollectionObject =
  | typeof Map
  | typeof WeakMap
  | typeof Set
  | typeof WeakSet

export type StructuredDataObject =
  | typeof ArrayBuffer
  | typeof SharedArrayBuffer
  | typeof Atomics
  | typeof DataView
  | typeof JSON

export type ControlAbstractionObject = typeof Promise

export type ReflectionObject = typeof Reflect | typeof Proxy

export type InternationalizationObject = typeof Intl

export type WebAssemblyObject = typeof WebAssembly

export type ObjectValue =
  | FundamentalObject
  | ErrorObject
  | NumberObject
  | TextObject
  | DateObject
  | IndexedCollectionObject
  | KeyedCollectionObject
  | StructuredDataObject
  | ControlAbstractionObject
  | ReflectionObject
  | InternationalizationObject
  | WebAssemblyObject
