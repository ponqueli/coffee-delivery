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
    position: relative;
    top: -0.5rem;
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

export const AddCartWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`
export const ContainerAmountCoffee = styled.div`
  grid-column: 2 / 2;

  width: 4.5rem;
  padding: 0.563rem;
  background: ${({ theme }) => theme['grey-300']};
  border-radius: 0.375rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.125rem;

  input {
    text-align: center;
    width: 1.25rem;
    background: transparent;
    border: 0px solid transparent;
    font-size: 1rem;
    color: ${({ theme }) => theme['grey-800']};

    &[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  button {
    cursor: pointer;
    border: 0;
    background: transparent;
    color: ${({ theme }) => theme['purple-500']};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.3s;

    &:disabled {
      color: ${({ theme }) => theme['grey-400']};
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      color: ${({ theme }) => theme['purple-800']};
    }
  }
`
