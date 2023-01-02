import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  max-width: 16rem;
  height: 19.375rem;
  background: ${({ theme }) => theme['grey-200']};
  border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
  padding: 1.5rem;
  margin-bottom: 2.625rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;

  position: relative;

  img {
    width: 7.5rem;
    height: 7.5rem;
    position: absolute;
    top: -30px;
  }

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: 800;
    text-align: center;
    margin: 1.125rem 0 0.5rem 0;
  }

  .description {
    font-size: 0.875rem;
    text-align: center;
    margin-bottom: 2.313rem;
    color: ${({ theme }) => theme['grey-500']};
  }
`

export const Tags = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  span {
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme['yellow-800']};
    background: ${({ theme }) => theme['yellow-300']};
    padding: 0.25rem 0.5rem;
    border-radius: 6.25rem;
  }
`

export const AddToCart = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
  }
`
