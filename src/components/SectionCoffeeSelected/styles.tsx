import styled from 'styled-components'

export const Container = styled.div`
  padding: 2.5rem;
  width: 28rem;
  background: ${({ theme }) => theme['grey-200']};
  border-radius: 0.375rem 2.75rem 0.375rem 2.75rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
