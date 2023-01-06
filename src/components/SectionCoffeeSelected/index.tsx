import { useCart } from '../../hooks/useCart'
import { SelectedCoffees } from '../SelectedCoffees'
import { Container } from './styles'

export function SectionCoffeeSelected() {
  const { cart, priceFormattedAndSubTotal } = useCart()
  console.log(priceFormattedAndSubTotal)
  return cart?.length ? (
    <Container>
      {priceFormattedAndSubTotal.map((item) => (
        <SelectedCoffees key={item.id} item={item} />
      ))}
    </Container>
  ) : (
    <Container>
      <p>Seu carrinho está vazio ☕</p>
    </Container>
  )
}
