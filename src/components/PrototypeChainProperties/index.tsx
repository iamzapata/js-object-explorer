import styles from './PrototypeChainProperties.module.scss'
import { TypeAndValue } from '@components'
import { ObjectInfo } from '@types'

export function PrototypeChainProperties({
  chainProperties,
}: {
  chainProperties: ObjectInfo['flatPrototypeChainProperties']
}) {
  return (
    <div className={styles.PrototypeChainProperies}>
      {chainProperties.map(({ type, name, constructor, properties }) => {
        return (
          <div key={name}>
            <div className={styles.ChainObject}>{name}</div>
            {properties && (
              <ul>
                {Object.entries(properties).map(([key, value]) => (
                  <li key={key}>
                    <span>{key}</span>
                    <TypeAndValue typeAndValue={value} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        )
      })}
    </div>
  )
}
