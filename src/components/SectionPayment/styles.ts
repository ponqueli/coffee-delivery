import styled from 'styled-components'

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  padding: 2.5rem;
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme['grey-200']};
`
export const ContentPaymentMethod = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
