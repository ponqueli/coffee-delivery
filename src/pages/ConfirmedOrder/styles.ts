import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;
  h1 {
    font-family: 'Baloo 2', cursive;
    color: ${({ theme }) => theme['yellow-800']};
    font-size: 2rem;
    line-height: 3rem;
  }
  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme['grey-800']};
    margin-bottom: 2.5rem;
  }
  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const InfoContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  background: ${({ theme }) => theme.white};
  min-width: 32rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: 7px 37px 7px 37px;
    z-index: -1;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`
