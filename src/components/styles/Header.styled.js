import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme, showBlue }) => showBlue && theme.colors.header };
  padding: 40px 0;
`