import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
`
interface InfoContainerProps {
  iconColor: string
}

export const IconContainer = styled.div<InfoContainerProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  padding: 0.5rem;
  color: ${({ theme }) => theme.white};
  background-color: ${({ iconColor }) => iconColor};
`
