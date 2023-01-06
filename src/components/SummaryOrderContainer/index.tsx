import { useCart } from '../../hooks/useCart'
import { formatPrice } from '../../utils/formatPrice'
import { Container, SectionPrice } from './styles'

export function SummaryOrderContainer() {
  const { totalProducts, totalShipping } = useCart()
  return (
    <Container>
      <SectionPrice>
        <p>Total de Itens</p>
        <span>{formatPrice(totalProducts)}</span>
      </SectionPrice>
      <SectionPrice>
        <p>Entrega</p>
        <span>R$ 3,50</span>
      </SectionPrice>
      <SectionPrice isTotal>
        <p>Total</p>
        <span>{formatPrice(totalShipping)}</span>
      </SectionPrice>
      <button type="submit">CONFIRMAR PEDIDO</button>
    </Container>
  )
}
