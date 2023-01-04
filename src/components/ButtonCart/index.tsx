import { ShoppingCart } from 'phosphor-react'
import { ButtonCartContainer } from './styles'

interface ButtonCartProps {
  variant: 'yellow' | 'purple'
  amount: number
  disabled?: boolean
  onHandleClick: () => void
}

export function ButtonCart({
  variant,
  amount,
  disabled = false,
  onHandleClick,
}: ButtonCartProps) {
  return (
    <ButtonCartContainer
      variant={variant}
      disabled={disabled}
      onClick={onHandleClick}
    >
      {amount && <span>{amount}</span>}
      <ShoppingCart size={20} weight="fill" />
    </ButtonCartContainer>
  )
}
