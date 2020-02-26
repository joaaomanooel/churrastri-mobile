import React from 'react';
import styled from 'styled-components/native';
import { colors, layout } from '@/constants';

const Button = styled.TouchableOpacity.attrs({ hitSlop: layout.largeHitSlop, activeOpacity: 0.7 })`
  padding-horizontal: ${layout.scale() * 20};
  margin-horizontal: ${layout.scale() * 30};
  padding-vertical: ${layout.scale() * 15};
  margin-vertical: ${layout.scale() * 30};
  border-radius: ${layout.scale() * 20};
  width: ${layout.screenWidth * 0.85};
  background-color: ${colors.black()};
  justify-content: center;
  align-items: center;
  align-self: center;
  ${layout.shadow}
`;

const ButtonText = styled.Text`
  font-size: ${layout.scale() * 16};
  color: ${colors.white()};
  font-weight: bold;
`;

export default React.memo(({ text = '', ...props }) => (
  <Button {...props}>
    <ButtonText style={props.textStyle}>{text.toUpperCase()}</ButtonText>
  </Button>
));
