import styles from './Collapsible.module.scss'
import classNames from 'classnames'
import { useState } from 'react'

interface CollapsibleProps {
  header: React.ReactNode
  children: React.ReactNode
}

export function Collapsible({ children, header }: CollapsibleProps) {
  const [isCollapsed, setIsCollapsed] = useState(true)

  return (
    <div
      className={classNames(
        styles.Collapsible,
        isCollapsed && styles.isCollapsed
      )}
    >
      <div className={styles.CollapsibleHeader}>
        <button
          className={classNames(styles.CollapseButton, 'code-font')}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <span className={styles.CollapseButtonTextWrapper}>
            <span className={styles.CollapseButtonText}>
              {isCollapsed ? '+' : '-'}
            </span>
          </span>

          <span>{header}</span>
        </button>
      </div>
      <span className={styles.CollapseChildren}>{children}</span>
    </div>
  )
}
