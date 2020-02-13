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

export const EmptyState = styled.Text`
  margin-horizontal: ${layout.scale() * 20};
  line-height: ${layout.scale() * 36};
  font-size: ${layout.scale() * 24};
  color: ${colors.black(0.8)};
  justify-content: center;
  text-align: center;
  font-weight: 900;
`;
