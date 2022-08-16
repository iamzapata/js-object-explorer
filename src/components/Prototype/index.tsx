import styles from './Prototype.module.scss'
import { TypeAndValue } from '@components'
import { Properties } from '@types'

export function Prototype({ prototype }: { prototype: Properties }) {
  if (!prototype) return null

  return (
    <div className={styles.PrototypeProperties}>
      <ul>
        {Object.entries(prototype).map(([key, value]) => {
          return (
            <li key={key}>
              <span>{key}</span> <TypeAndValue typeAndValue={value} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
