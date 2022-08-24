import styles from './FundamentalObject.module.scss'
import {
  ClickableName,
  Collapsible,
  OwnProperties,
  Proto,
  Prototype,
  PrototypeChainProperties,
} from '@components'
import ownPropertyStyles from '@components/OwnProperties/OwnProperties.module.scss'
import protoStyles from '@components/Proto/Proto.module.scss'
import prototypeChainStyles from '@components/PrototypeChainProperties/PrototypeChainProperties.module.scss'
import { ObjectInfo, ObjectValue } from '@types'
import { getObjectInformation } from '@utils/getObjectInformation'
import classNames from 'classnames'
import { Dispatch, SetStateAction } from 'react'

export type FundamentalObjectProps = {
  object: ObjectValue
  isExpanded: string | null
  setIsExpanded: Dispatch<SetStateAction<string | null>>
}

export function FundamentalObject({
  object,
  isExpanded,
  setIsExpanded,
}: FundamentalObjectProps) {
  const objectInfo: ObjectInfo = getObjectInformation(object)

  const {
    name,
    constructor,
    ownProperties,
/*     prototypeChainProperties,
 */    flatPrototypeChainProperties,
    prototype, // need a beter name for this
  } = objectInfo

/*   const {
    type: chainType,
    name: chainName,
    constructor: chainConstructor,
  } = prototypeChainProperties */

  return (
    <div className={classNames(styles.FundamentalObjectWrapper, 'code-font')}>
      <ClickableName
        name={name}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />
      {isExpanded === name && (
        <div className={styles.ObjectInfo}>
          <div className={styles.ObjectType}>
            <strong>type:</strong>
            {typeof object}
          </div>

          <div className={styles.ObjectConstructor}>
            <strong>constructor:</strong> {constructor}
          </div>

          <Collapsible
            header={
              <div
                className={classNames(
                  styles.ListHeader,
                  protoStyles.___proto___Header
                )}
              >
                [[Prototype]]
              </div>
            }
          >
            <Proto ___proto___={Object.getPrototypeOf(object)} />
          </Collapsible>

          <Collapsible
            header={
              <div
                className={classNames(
                  styles.ListHeader,
                  ownPropertyStyles.OwnPropertiesHeader
                )}
              >
                Static Properties
              </div>
            }
          >
            <OwnProperties ownProperties={ownProperties} />
          </Collapsible>

          <Collapsible
            header={
              <div
                className={classNames(
                  styles.ListHeader,
                  prototypeChainStyles.PrototypeChainProperiesHeader
                )}
              >
                Inherited Properties
              </div>
            }
          >
            <PrototypeChainProperties
              chainProperties={flatPrototypeChainProperties}
            />
          </Collapsible>

          <Collapsible
            header={
              <div
                className={classNames(
                  styles.ListHeader,
                  styles.___proto___Header
                )}
              >
                Prototype Properties
              </div>
            }
          >
            <Prototype prototype={prototype} />
          </Collapsible>
        </div>
      )}
    </div>
  )
}
