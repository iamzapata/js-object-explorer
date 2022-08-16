import styles from './Blockquote.module.scss'
import { ReactElement } from 'react'

interface BlockquoteProps {
  link?: string
  children: ReactElement[]
}

function BlockquoteLink({
  description,
  link,
}: {
  link: string
  description: string
}) {
  return (
    <cite>
      <a target="_blank" href={link}>
        {description}
      </a>
    </cite>
  )
}
Blockquote.Link = BlockquoteLink

export function Blockquote({ link, children }: BlockquoteProps) {
  if (!children) throw new Error('Blockquote requires at least one child')

  const linkChild = children.find(
    (child: ReactElement) => child.type === BlockquoteLink
  )

  const restOfChildren = children.filter((child: ReactElement) => {
    return !(typeof child === 'object' && child.type === BlockquoteLink)
  })

  return (
    <blockquote cite={link} className={styles.Blockquote}>
      <p>
        {restOfChildren}
        <cite>{linkChild}</cite>
      </p>
    </blockquote>
  )
}
