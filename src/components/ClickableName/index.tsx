import styles from './ClickableName.module.scss'
import { ObjectInfo } from '@types'

export function ClickableName({
  name,
  isExpanded,
  setIsExpanded,
}: {
  name: ObjectInfo['name']
  isExpanded: FundamentalObjectProps['isExpanded']
  setIsExpanded: FundamentalObjectProps['setIsExpanded']
}) {
  const handleOnClick = () => {
    if (name === isExpanded) return setIsExpanded(null)

    if (name) {
      setIsExpanded(name)
    }
  }

  return (
    <button className={styles.FundamentalObject} onClick={handleOnClick}>
      <div className={styles.ObjectName}>{name}</div>
    </button>
  )
}
