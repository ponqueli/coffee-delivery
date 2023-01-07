import { CurrencyDollar } from 'phosphor-react'
import { PaymentContainer } from './styles'
import { TitleSection } from '../TitleSection'
import { PaymentMethodOptions } from '../PaymentMethodOptions'

export function SectionPayment() {
  return (
    <PaymentContainer>
      <TitleSection
        icon={
          <CurrencyDollar size={22} color="#8047F8" className="iconPayment" />
        }
        title="Pagamento"
        description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
      />
      <PaymentMethodOptions />
    </PaymentContainer>
  )
}
