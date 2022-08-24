import styles from './OwnProperties.module.scss'
import { TypeAndValue } from '@components'
import { ObjectEntry, ObjectInfo } from '@types'

export function OwnProperties({
  ownProperties,
}: {
  ownProperties: ObjectInfo['ownProperties']
}) {
  if (!ownProperties) return null

  return (
    <div className={styles.OwnProperties}>
      <ul>
        {Object.entries(ownProperties).map(([key, value]: ObjectEntry) => (
          <li key={key}>
            <span>{key}</span> <TypeAndValue value={value} />
          </li>
        ))}
      </ul>
    </div>
  )
}
