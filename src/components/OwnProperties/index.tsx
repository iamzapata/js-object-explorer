import styles from './OwnProperties.module.scss'
import { TypeAndValue } from '@components'
import { ObjectInfo } from '@types'

export function OwnProperties({
  ownProperties,
}: {
  ownProperties: ObjectInfo['ownProperties']
}) {
  if (ownProperties === undefined) return null

  return (
    <div className={styles.OwnProperties}>
      <ul>
        {Object.entries(ownProperties).map(([key, value]) => (
          <li key={key}>
            <span>{key}</span> <TypeAndValue typeAndValue={value} />
          </li>
        ))}
      </ul>
    </div>
  )
}
