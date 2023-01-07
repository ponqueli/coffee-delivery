import { useLocation, useNavigate } from 'react-router-dom'
import { MapPin, Clock, CurrencyDollar } from 'phosphor-react'
import { Container, InfoContainer, InfoSection } from './styles'
import { OrderData } from '../Checkout'
import { useEffect } from 'react'
import { InfoItem } from '../../components/InfoItem'
import { defaultTheme } from '../../styles/themes/default'
import { paymentMethods } from '../../components/PaymentMethodOptions'
import image from '../../assets/Illustration.svg'

interface LocationType {
  state: OrderData
}

export function ConfirmedOrder() {
  const { state } = useLocation() as unknown as LocationType
  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [navigate, state])

  return (
    <Container>
      <section>
        <h1>Pedido confirmado!</h1>
        <p>Agora é só aguardar que logo o café chegará até você.</p>
        <InfoContainer>
          <InfoSection>
            <InfoItem
              icon={<MapPin weight="fill" />}
              iconColor={defaultTheme['purple-500']}
              text={
                <p>
                  Entrega em{' '}
                  <strong>
                    {state.street}, {state.number}, {state.complement},{' '}
                  </strong>
                  <br />
                  {state.district} - {state.city}, {state.uf}, {state.cep}
                </p>
              }
            />
          </InfoSection>
          <InfoSection>
            <InfoItem
              icon={<Clock weight="fill" />}
              iconColor={defaultTheme['yellow-500']}
              text={
                <p>
                  Previsão de entrega
                  <br />
                  <strong>20 min - 30 min</strong>
                </p>
              }
            />
          </InfoSection>
          <InfoSection>
            <InfoItem
              icon={<CurrencyDollar weight="fill" />}
              iconColor={defaultTheme['yellow-800']}
              text={
                <p>
                  Pagamento na entrega
                  <br />
                  <strong>{paymentMethods[state.paymentMethod].label}</strong>
                </p>
              }
            />
          </InfoSection>
        </InfoContainer>
      </section>
      <img
        src={image}
        alt="Imagem de um homem levando um produto em uma moto"
      />
    </Container>
  )
}
