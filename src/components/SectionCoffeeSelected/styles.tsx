import styled from 'styled-components'

export const EmptyContainer = styled.div`
  padding: 2.5rem;
  width: 28rem;
  background: ${({ theme }) => theme['grey-200']};
  border-radius: 0.375rem 2.75rem 0.375rem 2.75rem;

  display: flex;
  align-items: center;
  justify-content: center;
`
