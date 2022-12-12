import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import { Item, ListContainer } from './styles'

export function Qualities() {
  return (
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
  )
}
