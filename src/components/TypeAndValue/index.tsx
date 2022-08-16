import styles from './TypeAndValue.module.css'
import { PrimitiveValue } from '@types'

type TypeAndValueProps = {
  typeAndValue: {
    type:
      | 'string'
      | 'number'
      | 'bigint'
      | 'boolean'
      | 'symbol'
      | 'function'
      | 'object'
      | 'undefined'
    value: PrimitiveValue
  }
}

export function TypeAndValue({
  typeAndValue: { type, value },
}: TypeAndValueProps) {
  switch (type) {
    case 'string':
      return <PrimitiveDisplay value={value} wrapInQuotes />
    case 'boolean':
    case 'symbol':
      return <PrimitiveDisplay value={value} wrapInQuotes />
    case 'bigint':
    case 'number':
      return <PrimitiveDisplay value={value} />
    case 'undefined':
      return <PrimitiveDisplay value={value} />
    case 'object':
      return <ObjectDisplay value={value} />
    case 'function':
      return <FunctionDisplay />
  }
}

function PrimitiveDisplay({
  value,
  wrapInQuotes,
}: {
  value: PrimitiveValue
  wrapInQuotes?: boolean
}) {
  return (
    <span className={styles.PrimitiveValue}>
      {wrapInQuotes ? <span>{`"${value?.toString()}"`}</span> : <>{value}</>}
    </span>
  )
}

function ObjectDisplay({ value }: { value: PrimitiveValue }) {
  return value === null ? (
    <span>null</span>
  ) : (
    <span className={styles.ObjectValue}>{'{ }'}</span>
  )
}

function FunctionDisplay() {
  return <span className={styles.FunctionValue}>{'( )'}</span>
}
