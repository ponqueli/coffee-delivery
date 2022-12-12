import styled from 'styled-components'

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  column-gap: 1.25rem;
`
interface ItemProps {
  variant: 'purple' | 'yellowDark' | 'yellow' | 'gray'
}
const iconVariants = {
  purple: '#8047F8',
  yellowDark: '#C47F17',
  yellow: '#DBAC2C',
  gray: '#574F4D',
}

export const Item = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: ${({ variant }) => iconVariants[variant]};
    color: ${({ theme }) => theme.white};
    padding: 0.5rem;

    svg {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`
