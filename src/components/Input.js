import React from 'react';
import styled from 'styled-components/native';
import { colors, layout } from '@/constants';

const Container = styled.View`
  padding-horizontal: ${layout.scale() * 30};
  padding-vertical: ${layout.scale() * 15};
`;

const Label = styled.Text`
  font-size: ${layout.scale() * 18};
  color: ${colors.black(0.8)};
  font-weight: bold;
`;

const Input = styled.TextInput`
  padding-horizontal: ${layout.scale() * 20};
  padding-vertical: ${layout.scale() * 15};
  margin-vertical: ${layout.scale() * 15};
  background-color: ${colors.white()};
  font-size: ${layout.scale() * 16};
  justify-content: center;
`;

export default React.memo(props => (
  <Container style={props.containerStyle}>
    <Label style={props.labelStyle}>{props.label}</Label>
    <Input {...props} />
  </Container>
));
