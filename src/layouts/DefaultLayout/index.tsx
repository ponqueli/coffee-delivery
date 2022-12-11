import { Outlet } from 'react-router-dom'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import { Header } from '../../components/Header'
import {
  BannerContent,
  BannerTitle,
  HomeContainer,
  Item,
  LayoutContainer,
  LeftSide,
  ListContainer,
  RightSide,
  SectionBanner,
} from './styles'
import coffeeImg from '../../assets/Imagem.svg'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <HomeContainer>
        <SectionBanner>
          <BannerContent>
            <RightSide>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>

              <ListContainer>
                <Item variant="yellowDark">
                  <div>
                    <ShoppingCart weight="fill" size={16} />
                  </div>
                  <span>Compra simples e segura</span>
                </Item>
                <Item variant="yellow">
                  <div>
                    <Package weight="fill" />
                  </div>
                  <span>Embalagem mantém o café intacto</span>
                </Item>
                <Item variant="gray">
                  <div>
                    <Timer weight="fill" />
                  </div>
                  <span>Entrega rápida e rastreada</span>
                </Item>
                <Item variant="purple">
                  <div>
                    <Coffee weight="fill" />
                  </div>
                  <span>O café chega fresquinho até você</span>
                </Item>
              </ListContainer>
            </RightSide>
            <LeftSide>
              <img
                src={coffeeImg}
                alt="image of glass of coffee with coffee beans around"
              />
            </LeftSide>
          </BannerContent>
        </SectionBanner>
      </HomeContainer>
    </LayoutContainer>
  )
}
