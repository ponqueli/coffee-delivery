import { useLocation, useNavigate } from 'react-router-dom'
import { Container } from './styles'
import { OrderData } from '../Checkout'
import { useEffect } from 'react'

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
        <p>
          Entrega em{' '}
          <strong>
            {state.street}, {state.number}
          </strong>
        </p>
      </section>
    </Container>
  )
}
