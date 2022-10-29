import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
