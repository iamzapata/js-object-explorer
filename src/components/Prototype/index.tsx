import styles from './Prototype.module.scss'
import { TypeAndValue } from '@components'
import { ObjectEntry, ObjectProperties } from '@types'

export function Prototype({ prototype }: { prototype: ObjectProperties }) {
  if (!prototype) return null

  return (
    <div className={styles.PrototypeProperties}>
      <ul>
        {Object.entries(prototype).map(([key, value]: ObjectEntry) => {
          return (
            <li key={key}>
              <span>{key}</span> <TypeAndValue value={value} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
