import styled, { css } from 'styled-components'

export const PaymentMethodContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }
  input:checked + label div {
    ${({ theme }) => css`
      background: ${theme['purple-300']};
      border-color: ${theme['purple-500']};
      color: ${theme['purple-800']};

      svg {
        color: ${({ theme }) => theme['purple-500']};
      }

      &:hover {
        background: ${theme['purple-300']};
        filter: brightness(0.95);
      }
    `}
  }
`

export const ContentContainer = styled.div`
  padding: 0 1rem;
  background: ${({ theme }) => theme['grey-300']};
  color: ${({ theme }) => theme['grey-500']};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;
  border: 1px solid ${({ theme }) => theme['grey-300']};
  transition: 0.15s;
  svg {
    color: ${({ theme }) => theme['grey-500']};
  }
  &:hover {
    background: ${({ theme }) => theme['grey-350']};
    cursor: pointer;
  }
  user-select: none;
`
