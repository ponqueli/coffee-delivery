import { MapPin, ShoppingCart } from 'phosphor-react'
import { ButtonCart, ContentLeft, HeaderContainer, MainContent } from './styles'
import coffeeLogo from '../../assets/Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <MainContent>
        <img src={coffeeLogo} alt="Logo of Coffe Delivery app" />
        <ContentLeft>
          <div>
            <MapPin size={20} weight="fill" />
            <span>Ribeirão Preto, SP</span>
          </div>
          <ButtonCart variant="yellow">
            <span>10</span>
            <ShoppingCart size={20} weight="fill" />
          </ButtonCart>
        </ContentLeft>
      </MainContent>
    </HeaderContainer>
  )
}
