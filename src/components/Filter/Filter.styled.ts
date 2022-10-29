import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text};
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Input = styled.input`
  margin-top: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.sm};
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.black}`};
  outline: none;
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.m};

  &:focus {
    border: ${p => `${p.theme.borders.normal} ${p.theme.colors.black}`};
  }
`;
