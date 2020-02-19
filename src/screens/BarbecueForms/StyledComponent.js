import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';
import { colors, layout } from '@/constants';
import { Button as ButtonCP } from '@/components';


export const Container = styled.ScrollView`
  height: ${layout.screenHeight};
  width: ${layout.screenWidth};
  flex: 1;
`;

export const FormView = styled.KeyboardAvoidingView``;

const IconContainer = styled.TouchableOpacity.attrs({ activeOpacity: 0.7 })`
  top: ${layout.statusBarHeight + (layout.scale() * 30)};
  position: absolute;
  z-index: 15;
`;

export const ArrowContainer = styled(IconContainer)`
  left: 20;
`;

export const TrashContainer = styled(IconContainer)`
  right: 20;
`;

export const Icon = styled(RNIcon).attrs(() => ({
  size: layout.scale() * 30,
  color: colors.black(0.8),
}))``;

export const Button = styled(ButtonCP).attrs(() => ({ textStyle: { color: colors.black(0.8) } }))`
  background-color: ${colors.yellow()};
`;
