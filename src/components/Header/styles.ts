import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  position: sticky;
  top: 0;
  left: 0;
`

export const MainContent = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: inherit;
  max-width: 70rem;
  height: inherit;
  margin-right: auto;
  margin-left: auto;
  gap: 1rem;
`

export const ContentLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  > div {
    display: flex;
    padding: 0.5rem;
    background-color: ${({ theme }) => theme['purple-300']};
    color: ${({ theme }) => theme['purple-500']};
    border-radius: 6px;
    gap: 0.25rem;
  }
`

type ButtonProps = {
  variant?: 'purple' | 'yellow'
}

export const ButtonCart = styled.button<ButtonProps>`
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
    variant === 'purple' ? theme['purple-300'] : theme['yellow-300']};

  position: relative;

  svg {
    color: ${({ theme, variant }) =>
      variant === 'purple' ? theme['purple-500'] : theme['yellow-800']};
  }

  transition: filter 0.2s;

  :not(:disabled):hover {
    filter: brightness(0.9);
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
