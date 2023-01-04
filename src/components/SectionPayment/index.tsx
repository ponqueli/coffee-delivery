import { useState } from 'react'
import { CurrencyDollar, CreditCard, Money, Bank } from 'phosphor-react'
import { ContentPaymentMethod, PaymentContainer } from './styles'
import { TitleSection } from '../TitleSection'
import { PaymentMethod } from '../PaymentMethod'

export function SectionPayment() {
  const [typePayment, setTypePayment] = useState<
    'creditCard' | 'debitCard' | 'money'
  >('creditCard')

  return (
    <PaymentContainer>
      <TitleSection
        icon={
          <CurrencyDollar size={22} color="#8047F8" className="iconPayment" />
        }
        title="Pagamento"
        description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
      />
      <ContentPaymentMethod>
        <PaymentMethod
          onClick={() => setTypePayment('creditCard')}
          isActive={typePayment === 'creditCard'}
        >
          <CreditCard size={16} />
          <span>CARTÃO DE CRÉDITO</span>
        </PaymentMethod>
        <PaymentMethod
          onClick={() => setTypePayment('debitCard')}
          isActive={typePayment === 'debitCard'}
        >
          <Bank size={16} />
          <span>CARTÃO DE DÉBITO</span>
        </PaymentMethod>
        <PaymentMethod
          onClick={() => setTypePayment('money')}
          isActive={typePayment === 'money'}
        >
          <Money size={16} />
          <span>DINHEIRO</span>
        </PaymentMethod>
      </ContentPaymentMethod>
    </PaymentContainer>
  )
}
