import styled from 'styled-components/native';
import { colors, layout } from '@/constants';
import { AnimatedButton } from '@/components';

export const Container = styled.ScrollView`
  width: ${layout.screenWidth};
  flex: 1;
`;

export const ListContainer = styled.View`
  padding-bottom: ${layout.scale() * 100};
  margin-top: -20;
  z-index: 10;
  flex: 1;
`;

export const Button = styled(AnimatedButton)
  .attrs(() => ({ textStyle: { color: colors.black(0.8) } }))`
  background-color: ${colors.yellow()};
`;
