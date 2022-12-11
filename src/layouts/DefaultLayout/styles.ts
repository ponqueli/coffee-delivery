import styled from 'styled-components'
import bgBanner from '../../assets/Background.svg'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
`

// TODO: ADD AS A HOME COMPONENT
export const HomeContainer = styled.main`
  width: 100%;
`

export const SectionBanner = styled.section`
  width: 100%;
  background-image: url(${bgBanner});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export const BannerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 70rem;
  height: 34rem;
  padding: 0px 0.75rem;
  margin: 0 auto;
`

export const RightSide = styled.div`
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    line-height: 3.5rem;
    color: ${({ theme }) => theme['grey-900']};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: ${({ theme }) => theme['grey-900']};
    margin-bottom: 4.125rem;
  }
`
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

export const LeftSide = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
