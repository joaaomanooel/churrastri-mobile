import React from 'react';
import styled from 'styled-components/native';
import { colors, layout } from '@/constants';

const Touchable = styled.TouchableOpacity.attrs({ activeOpacity: 0.80 })`
  padding-horizontal: ${layout.scale() * 30};
  padding-vertical: ${layout.scale() * 10};
`;

const Label = styled.Text`
  font-size: ${layout.scale() * 18};
  color: ${colors.black()};
  font-weight: bold;
`;

const Input = styled.View`
  padding-horizontal: ${layout.scale() * 20};
  padding-vertical: ${layout.scale() * 15};
  margin-vertical: ${layout.scale() * 10};
  background-color: ${colors.white()};
  flex-direction: row;
  align-items: center;
`;

const InputContent = styled.Text`
  font-size: ${layout.scale() * 16};
  color: ${colors.black()};
`;

export default React.memo(({ onPress = {}, label, value }) => {
  return (
    <Touchable onPress={onPress}>
      <Label>{label}</Label>
      <Input>
        {!value && <InputContent style={{ color: colors.black() }}>Selecione</InputContent>}
        <InputContent ellipsizeMode="tail" numberOfLines={1}>{value}</InputContent>
      </Input>
    </Touchable>
  );
});
