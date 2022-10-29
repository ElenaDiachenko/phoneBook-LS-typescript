import styled from 'styled-components';

export const Title = styled.h1`
  color: ${p => p.theme.colors.black};
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.l};
`;

export const TitleContact = styled.h2`
color: ${p => p.theme.colors.text}; 
margin-bottom:${p => p.theme.space[4]}px;
}`;

export const Section = styled.section`
  width: 480px;
  margin: 0 auto;
  padding: ${p => p.theme.space[4]}px;
`;
