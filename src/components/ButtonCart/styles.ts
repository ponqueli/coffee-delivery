import styled from 'styled-components'

type ButtonProps = {
  variant?: 'purple' | 'yellow'
}

export const ButtonCartContainer = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.25rem;

  min-width: 2.3rem;
  height: 2.25rem;

  border: none;
  border-radius: 6px;

  padding: 0.5rem;
  font-size: 0.875rem;

  background-color: ${({ theme, variant }) =>
    variant === 'purple' ? theme['purple-800'] : theme['yellow-300']};

  position: relative;

  svg {
    color: ${({ theme, variant }) =>
    variant === 'purple' ? theme.white : theme['yellow-800']};
  }

  transition: background-color 0.2s;

  :disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme['grey-300']};
  }

  :not(:disabled):hover {
    background-color: ${({ theme, variant }) =>
    variant === 'purple' ? theme['purple-500'] : theme['yellow-200']};
  }

  > span {
    position: absolute;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);

    width: 1.25rem;
    height: 1.25rem;

    border-radius: 50%;
    background-color: ${({ theme }) => theme['yellow-800']};
    color: ${({ theme }) => theme.white};

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 0.75rem;
    font-weight: 700;
  }
`
