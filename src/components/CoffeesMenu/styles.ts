import styled from 'styled-components'

export const MenuContainer = styled.section`
  width: 100%;
  max-width: 70rem;
  padding: 0px 0.75rem;
  margin: 0 auto;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    margin: 3.375rem 0;
    color: ${({ theme }) => theme['grey-800']};
  }
`

export const CoffeeContainerList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`
