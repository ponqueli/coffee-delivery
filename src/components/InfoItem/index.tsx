import { ReactNode } from 'react'
import { Container, IconContainer } from './styles'

interface InfoItemProps {
  icon: ReactNode
  text: string | ReactNode
  iconColor: string
}

export function InfoItem({ icon, text, iconColor }: InfoItemProps) {
  return (
    <Container>
      <IconContainer iconColor={iconColor}>{icon}</IconContainer>
      {text}
    </Container>
  )
}
