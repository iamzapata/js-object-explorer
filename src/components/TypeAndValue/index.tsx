import styles from './TypeAndValue.module.css'
import { ObjectProperties } from '@types'

type TypeAndValueProps = {
  value: ObjectProperties
}

export function TypeAndValue({ value }: TypeAndValueProps) {
  const type = typeof value

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
  value: ObjectProperties
  wrapInQuotes?: boolean
}) {
  return (
    <span className={styles.PrimitiveValue}>
      {wrapInQuotes ? <span>{`"${value?.toString()}"`}</span> : <>{value}</>}
    </span>
  )
}

function ObjectDisplay({ value }: { value: ObjectProperties }) {
  return value === null ? (
    <span>null</span>
  ) : (
    <span className={styles.ObjectValue}>{'{ }'}</span>
  )
}

function FunctionDisplay() {
  return <span className={styles.FunctionValue}>{'( )'}</span>
}
