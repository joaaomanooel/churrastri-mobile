import styled from 'styled-components/native';
import { colors, layout } from '@/constants';
import { AnimatedButton } from '@/components';

export const Container = styled.ScrollView`
  ${({ loading }) => loading && `margin-top: ${layout.statusBarHeight}`};
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

export const CardContainer = styled.TouchableOpacity.attrs({ activeOpacity: 0.7 })`
  padding-horizontal: ${layout.scale() * 20};
  padding-vertical: ${layout.scale() * 20};
  margin-bottom: ${layout.scale() * 10};
  background-color: ${colors.white()};
  width: ${layout.screenWidth * 0.9};
  height: ${layout.scale() * 100};
  flex-direction: row;
  align-self: center;
  border-radius: 2;
  ${layout.shadow}
`;
