import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';
import { colors, layout } from '@/constants';
import { AnimatedButton as ButtonCP } from '@/components';


export const Container = styled.ScrollView`
  height: ${layout.screenHeight};
  width: ${layout.screenWidth};
  flex: 1;
`;

export const FormView = styled.KeyboardAvoidingView`
  margin-bottom: ${layout.scale() * 100};
`;

export const ArrowContainer = styled.TouchableOpacity.attrs({ activeOpacity: 0.7 })`
  position: absolute;
  z-index: 15;
  left: 20;
  top: 50;
`;

export const ArrowIcon = styled(Icon).attrs(() => ({
  name: 'arrow-back',
  size: layout.scale() * 30,
  color: colors.black(0.8),
}))``;

export const Button = styled(ButtonCP).attrs(() => ({ textStyle: { color: colors.black(0.8) } }))`
  background-color: ${colors.yellow()};
`;
