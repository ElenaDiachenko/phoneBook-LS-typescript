import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.m};
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Message = styled(ErrorMessage)`
  color: ${p => p.theme.colors.primary};
  font-size: ${p => p.theme.fontSizes.m};
`;

export const Input = styled(Field)`
  margin-top: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
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

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  cursor: pointer;
  width: 150px;
  height: 40px;
  background-color: ${p => p.theme.colors.black};
  color: ${p => p.theme.colors.white};
  font-family: inherit;
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
