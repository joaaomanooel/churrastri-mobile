import React from 'react';
import styled from 'styled-components/native';
import { colors, layout, images } from '@/constants';

const TitleContainer = styled.ImageBackground`
  height: ${layout.screenHeight / (layout.scale() * 4)};
  background-color: ${colors.yellow()};
  width: ${layout.screenWidth};
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  margin-top: ${layout.statusBarHeight};
  font-size: ${layout.scale() * 36};
  color: ${colors.black(0.8)};
  align-self: center;
  font-weight: 700;
`;

export default React.memo(() => (
  <TitleContainer source={images.boxTitle}>
    <Title>Agenda de Churras</Title>
  </TitleContainer>
));
