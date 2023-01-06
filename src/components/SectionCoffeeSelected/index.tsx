import { useCart } from '../../hooks/useCart'
import { SelectedCoffees } from '../SelectedCoffees'
import { SummaryOrderContainer } from '../SummaryOrderContainer'
import { Container } from './styles'

export function SectionCoffeeSelected() {
  const { cart, priceFormattedAndSubTotal } = useCart()
  return cart?.length ? (
    <Container>
      {priceFormattedAndSubTotal.map((item) => (
        <SelectedCoffees key={item.id} item={item} />
      ))}
      <SummaryOrderContainer />
    </Container>
  ) : (
    <Container>
      <p>Seu carrinho está vazio ☕</p>
    </Container>
  )
}
