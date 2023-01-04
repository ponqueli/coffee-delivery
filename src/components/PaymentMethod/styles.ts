import styled from 'styled-components'

interface RadioBoxProps {
  isActive: boolean
}

const colors = {
  purple: '#EBE5F9',
  purpleDark: '#8047F8',
}

export const RadioBox = styled.button<RadioBoxProps>`
  background: ${({ isActive, theme }) =>
    isActive ? colors.purple : theme['grey-300']};
  border: 1px solid
    ${({ isActive }) => (isActive ? colors.purpleDark : 'transparent')};
  border-radius: 0.375rem;
  font-size: 0.75rem;
  padding: 1rem;
  color: ${({ theme }) => theme['grey-500']};
  min-width: 10.938rem;

  cursor: pointer !important;
  transition: 0.3s;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  &:hover {
    filter: brightness(0.9);
  }

  span {
    color: ${({ theme, isActive }) =>
      isActive ? theme['purple-800'] : theme['grey-500']};
  }

  svg {
    color: ${({ theme, isActive }) =>
      isActive ? theme['purple-800'] : theme['grey-500']};
  }
`
