import { SectionAddress } from '../../components/SectionAddress'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <section>
        <h1>Complete seu pedido</h1>
        <SectionAddress />
      </section>
      <section>
        <h1>Cafés selecionados</h1>
      </section>
    </CheckoutContainer>
  )
}
