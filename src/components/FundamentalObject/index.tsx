import styles from "./FundamentalObject.module.css"

const propertiesWithValues = (object) => {
  const propList = Object.getOwnPropertyNames(object).sort()

  return propList.reduce((accum, nextKey) => {
    const value = Object[nextKey]

    return [...accum, [nextKey, value]]
  }, [])
}

export function FundamentalObject({ object }) {
  return (
    <div>
      <div className={styles.ObjectName}>{object.name}</div>

      <div className={styles.ObjectOwnProperties}>
        <h2>Own Properties</h2>
        <ul>
          {propertiesWithValues(object).map(([key, value]) => (
            <li key={key}>
              <div>
                <div>{key}</div>
                <div>{propertiesWithValues(value)}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
