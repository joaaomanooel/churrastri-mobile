import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';
import { colors, layout } from '@/constants';
import { AnimatedButton as ButtonCP } from '@/components';

export const Container = styled.ScrollView`
  width: ${layout.screenWidth};
  flex: 1;
`;

const IconContainer = styled.TouchableOpacity.attrs({ activeOpacity: 0.7 })`
  top: ${layout.statusBarHeight + (layout.scale() * 30)};
  position: absolute;
  z-index: 15;
`;

export const ArrowContainer = styled(IconContainer)`
  left: 20;
`;

export const EditContainer = styled(IconContainer)`
  right: 20;
`;

export const EditIcon = styled(Icon).attrs(() => ({
  name: 'border-color',
  size: layout.scale() * 30,
  color: colors.black(0.8),
}))``;


export const ArrowIcon = styled(Icon).attrs(() => ({
  name: 'arrow-left',
  size: layout.scale() * 30,
  color: colors.black(0.8),
}))``;

export const Button = styled(ButtonCP).attrs(() => ({ textStyle: { color: colors.black(0.8) } }))`
  background-color: ${colors.yellow()};
`;

export const TopContainer = styled.View`
  flex-direction: row;
  padding-vertical: ${layout.scale() * 20};
  padding-horizontal: ${layout.scale() * 20};
`;

export const RightView = styled.View`
  padding-left: ${layout.scale() * 20};
  justify-content: space-between;
  flex:1;
`;

export const Title = styled.Text.attrs({ ellipsizeMode: 'tail', numberOfLines: 1 })`
  font-size: ${layout.scale() * 24};
  color: ${colors.black(0.8)};
  font-weight: 800;
`;

export const Description = styled.Text`
  margin-horizontal: ${layout.scale() * 10};
  margin-vertical: ${layout.scale() * 28};
  font-size: ${layout.scale() * 16};
  align-self: center;
`;

export const ItemContainer = styled.View`
  padding-horizontal: ${layout.scale() * 20};
  padding-vertical: ${layout.scale() * 20};
  margin-bottom: ${layout.scale() * 10};
  background-color: ${colors.white()};
  width: ${layout.screenWidth * 0.9};
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  align-self: center;
  border-radius: 2;
  ${layout.shadow}
`;

export const Name = styled.Text`
  width: ${layout.screenWidth * 0.3};
  color: ${colors.black(0.8)};
`;

export const Label = styled.TouchableOpacity.attrs({ activeOpacity: 0.7 })`
  background-color: ${({ isPaid }) => colors[isPaid ? 'yellow' : 'white']()};
  border-color: ${({ isPaid }) => colors[!isPaid ? 'yellow' : 'white']()};
  max-width: ${layout.screenWidth * 0.3};
  border-radius: ${layout.scale() * 25};
  border-width: ${layout.scale() * 2};
  width: ${layout.scale() * 100};
  justify-content: center;
  align-items: center;
`;

export const LabelText = styled.Text`
  padding-horizontal: ${layout.scale() * 10};
  color: ${colors.black(0.8)};
  line-height: 30;
`;

export const Price = styled.Text`
  color: ${colors.black(0.8)};
`;

export const ListView = styled.View`
  margin-bottom: ${layout.scale() * 100};
`;
