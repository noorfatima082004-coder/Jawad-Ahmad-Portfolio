import type { CSSProperties, ReactNode } from 'react'

type PanelProps = {
  number: string
  title?: string
  className?: string
  dark?: boolean
  children: ReactNode
  style?: CSSProperties
}

export function Panel({
  number,
  title,
  className = '',
  dark,
  children,
  style,
}: PanelProps) {
  return (
    <section
      className={`panel ${dark ? 'panel--dark' : ''} ${className}`}
      style={style}
    >
      <span className="panel__number">{number}</span>
      {title ? <h2 className="panel__title">{title}</h2> : null}
      {children}
    </section>
  )
}
