import styled from 'styled-components';

export const ContactName = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.black};
  margin-right: ${p => p.theme.space[3]}px;
`;

export const ContactNumber = styled.span`
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.text};
`;
export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  cursor: pointer;
  width: 80px;
  padding: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.black};
  color: ${p => p.theme.colors.white};
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.black}`};
  border-radius: ${p => p.theme.radii.sm};

  &:hover,
  :focus {
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 25%),
      0px 4px 5px 0px rgb(0 0 0 / 18%), 0px 1px 10px 0px rgb(0 0 0 / 15%);
  }

  &:active {
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.black};
    border-radius: ${p => p.theme.radii.sm};
  }
`;
