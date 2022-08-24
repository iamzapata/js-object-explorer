import { FundamentalObject as FundamentalObjectComponent } from '@components'
import { Blockquote } from '@components'
import { FundamentalObject } from '@types'
import { useState } from 'react'

const FUNDAMENTAL_OBJECTS: FundamentalObject[] = [
  Object,
  Function,
  Boolean,
  Symbol,
]

const DESCRIPTION_LINK =
  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects#fundamental_objects'

export const FundamentalObjectList = () => {
  const [isExpanded, setIsExpanded] = useState<string | null>(null)

  return (
    <section>
      <h2>Fundamental Objects</h2>

      <Blockquote link={DESCRIPTION_LINK}>
        <Blockquote.Link description="MDN" />
        <>
          These are the fundamental, basic objects upon which all other objects
          are based. This includes general objects, booleans, functions, and
          symbols.
        </>
      </Blockquote>
      <div className="d-flex justy-content-space-between">
        {FUNDAMENTAL_OBJECTS.map((object) => (
          <FundamentalObjectComponent
            object={object}
            key={object.name}
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
          />
        ))}
      </div>
    </section>
  )
}
