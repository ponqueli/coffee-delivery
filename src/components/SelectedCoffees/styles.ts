import styled from 'styled-components'

export const Container = styled.div`
  max-width: 23rem;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto auto;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid ${({ theme }) => theme['grey-300']};
  gap: 1rem;

  &:not(:first-child) {
    padding-top: 2.5rem;
  }

  img {
    width: 4rem;
    height: 4rem;
    grid-row: 1 / 3;
    grid-column: 1 / 1;
  }

  p {
    grid-column: 2 / 4;
    font-size: 1rem;
    color: ${({ theme }) => theme['grey-800']};
  }

  span {
    grid-column: 4 / 4;
    grid-row: 1 / 3;
    font-weight: 700;
    width: 70px;
    text-align: end;
  }

  .ContentAmountAndButtonRemove {
    display: flex;
    gap: 0.5rem;
  }

  .buttonRemove {
    padding: 0.563rem;
    background: ${({ theme }) => theme['grey-300']};
    border-radius: 0.375rem;
    border: 0;
    font-size: 0.75rem;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    transition: 0.3s;

    svg {
      color: ${({ theme }) => theme['purple-500']};
      font-size: 1.25rem;
    }

    span {
      color: ${({ theme }) => theme['purple-800']};
      width: 100%;
    }

    &:hover {
      background: ${({ theme }) => theme['purple-300']};
    }
  }
`
export const ContainerAmountCoffee = styled.div`
  grid-column: 2 / 2;

  width: 4.5rem;
  padding: 0.563rem;
  background: ${({ theme }) => theme['grey-300']};
  border-radius: 0.375rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.125rem;

  input {
    width: 1.25rem;
    background: transparent;
    border: 0px solid transparent;
    font-size: 1rem;
    text-align: center;
    color: ${({ theme }) => theme['grey-800']};

    &[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  button {
    cursor: pointer;
    border: 0;
    background: transparent;
    color: ${(props) => props.theme['purple-500']};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.3s;

    &:disabled {
      color: ${({ theme }) => theme['grey-400']};
    }

    &:hover {
      color: ${(props) => props.theme['purple-800']};
    }
  }
`
