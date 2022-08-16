import styles from './Proto.module.scss'
import { TypeAndValue } from '@components'
import { ObjectValue } from '@types'
import { getPropertiesWithValues } from '@utils/getPropertiesWithValues'

type ProtoProps = {
  ___proto___: ObjectValue
}
export function Proto({ ___proto___ }: ProtoProps) {
  if (!___proto___) return null

  const propperties = getPropertiesWithValues(___proto___)

  return (
    <div className={styles.___proto___}>
      <ul>
        {Object.entries(propperties).map(([key, value]) => (
          <li key={key}>
            <span>{key}</span> <TypeAndValue typeAndValue={value} />
          </li>
        ))}
      </ul>
    </div>
  )
}
