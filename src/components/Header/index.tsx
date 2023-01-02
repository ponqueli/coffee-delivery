import { MapPin } from 'phosphor-react'
import { ContentLeft, HeaderContainer, MainContent } from './styles'
import coffeeLogo from '../../assets/Logo.svg'
import { ButtonCart } from '../ButtonCart'

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
          <ButtonCart amount={10} variant="yellow" onHandleClick={() => {}} />
        </ContentLeft>
      </MainContent>
    </HeaderContainer>
  )
}
