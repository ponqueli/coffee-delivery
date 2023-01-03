import styled, { css } from 'styled-components'

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;

  > p {
    color: red;
  }
`
interface InputStyleInputBaseProps {
  hasError: boolean
}

export const InputBase = styled.input<InputStyleInputBaseProps>`
  background: ${({ theme }) => theme['grey-100']};
  border: 1px solid ${({ theme }) => theme['grey-300']};
  padding: 0.75rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme['grey-500']};

  transition: 0.3s;

  &:focus {
    border: 1px solid ${({ theme }) => theme['yellow-800']};
  }

  &::-webkit-input-placeholder {
    color: ${({ theme }) => theme['grey-400']};
  }

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: red;
    `}
`
