import { ReactNode } from 'react'
import { TitleAddress } from './styles'

interface TitleSectionProps {
  icon: ReactNode
  title: string
  description: string
}

export function TitleSection({ icon, title, description }: TitleSectionProps) {
  return (
    <TitleAddress>
      {icon}
      <h2>{title}</h2>
      <p>{description}</p>
    </TitleAddress>
  )
}
