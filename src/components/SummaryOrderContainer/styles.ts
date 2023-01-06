import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin: 1.5rem 0;
  margin-bottom: 0;

  button {
    margin-top: 0.75rem;
    width: 100%;
    background: ${({ theme }) => theme['yellow-500']};
    font-weight: 700;
    font-size: 0.875rem;
    padding: 0.75rem;
    border: 0;
    border-radius: 0.375rem;
    cursor: pointer;
    color: ${({ theme }) => theme.white};
    font-size: 1rem;

    transition: 0.3s;

    &:hover {
      background: ${({ theme }) => theme['yellow-800']};
    }

    &:disabled {
      background: ${({ theme }) => theme['yellow-800']};
    }

    a {
      color: ${({ theme }) => theme.white};
    }
  }
`
type SectionPriceProps = {
  isTotal?: boolean
}

const PriceBase = styled.div<SectionPriceProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  font-family: 'Roboto', sans-serif;
`

export const SectionPrice = styled(PriceBase)`
  p {
    font-size: ${({ isTotal }) => (isTotal ? '1.25rem' : '0.875rem')};
    font-weight: ${({ isTotal }) => (isTotal ? 700 : 400)};
  }

  span {
    font-size: ${({ isTotal }) => (isTotal ? '1.25rem' : '1rem')};
    font-weight: ${({ isTotal }) => (isTotal ? 700 : 400)};
  }
`
