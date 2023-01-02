import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;

  padding: 0.75rem;

  display: flex;
  justify-content: center;
  align-items: center;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  background-color: ${({ theme }) => theme.white};
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
