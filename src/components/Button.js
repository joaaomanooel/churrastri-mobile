import React from 'react';
import styled from 'styled-components/native';
import { colors, layout } from '@/constants';

const Button = styled.TouchableOpacity`
  padding-horizontal: ${layout.scale() * 20};
  margin-horizontal: ${layout.scale() * 30};
  padding-vertical: ${layout.scale() * 15};
  margin-vertical: ${layout.scale() * 30};
  border-radius: ${layout.scale() * 15};
  width: ${layout.screenWidth * 0.85};
  background-color: ${colors.black(0.8)};
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

export default React.memo(props => (
  <Button {...props}>
    <ButtonText style={props.textStyle}>{props.text}</ButtonText>
  </Button>
));
