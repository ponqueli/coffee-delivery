import styled from 'styled-components'
import bgBanner from '../../assets/Background.svg'

export const SectionBanner = styled.section`
  width: 100%;
  height: 34rem;

  display: flex;
  align-items: center;
  justify-content: center;

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
export const LeftSide = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
