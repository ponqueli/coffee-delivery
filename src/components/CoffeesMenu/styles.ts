import styled from 'styled-components'

export const MenuContainer = styled.section`
  width: 100%;
  max-width: 70rem;
  margin-right: auto;
  margin-left: auto;
  margin-top: 2rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    color: ${({ theme }) => theme['grey-800']};
  }
`

export const CoffeeContainerList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`
