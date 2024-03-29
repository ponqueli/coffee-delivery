import { MapPin } from 'phosphor-react'
import { ContentLeft, HeaderContainer, MainContent } from './styles'
import coffeeLogo from '../../assets/Logo.svg'
import { ButtonCart } from '../ButtonCart'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cart } = useCart()
  const totalProducts = cart.length ? cart.length : null
  return (
    <HeaderContainer>
      <MainContent>
        <NavLink to="/" title="home">
          <img src={coffeeLogo} alt="Logo of Coffe Delivery app" />
        </NavLink>
        <ContentLeft>
          <div>
            <MapPin size={20} weight="fill" />
            <span>Ribeirão Preto, SP</span>
          </div>
          <NavLink to="/checkout" title="checkout">
            <ButtonCart
              amount={totalProducts}
              variant="yellow"
              onHandleClick={() => {}}
            />
          </NavLink>
        </ContentLeft>
      </MainContent>
    </HeaderContainer>
  )
}
