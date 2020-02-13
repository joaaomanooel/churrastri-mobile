import React from 'react';
import styled from 'styled-components/native';
import { colors, layout } from '@/constants';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Container = styled.TouchableOpacity.attrs({ activeOpacity: 0.7 })`
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

const DateContainer = styled.View`
  border-right-width: ${layout.scale() * 3};
  border-right-color: ${colors.black(0.8)};
  padding-right: ${layout.scale() * 20};
  justify-content: center;
  align-items: center;
  ${layout.shadow}
`;

const Date = styled.Text`
  font-size: ${layout.scale() * 24};
  color: ${colors.black(0.8)};
  font-weight: 900;
`;

const RightView = styled.View`
  justify-content: space-between;
  padding-left: ${layout.scale() * 20};
  flex:1;
`;

const Title = styled.Text`
  font-size: ${layout.scale() * 20};
  color: ${colors.black(0.8)};
  font-weight: 800;
`;

const BottomView = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

const Icon = styled(MaterialIcon).attrs(() => ({
  size: layout.scale() * 24,
  color: colors.yellow(),
}))``;

const BottomText = styled.Text`
  padding-left: ${layout.scale() * 5};
  font-size: ${layout.scale() * 20};
  color: ${colors.black(0.8)};
  font-weight: 400;
`;

export default React.memo(props => (
  <Container>
    <DateContainer>
      <Date>01</Date>
      <Date>12</Date>
    </DateContainer>
    <RightView>
      <Title>Niver do Gui</Title>
      <BottomView>
        <BottomView>
          <Icon name="supervisor-account" />
          <BottomText>15</BottomText>
        </BottomView>
        <BottomView>
          <Icon name="monetization-on" />
          <BottomText>RS 280,00</BottomText>
        </BottomView>
      </BottomView>
    </RightView>
  </Container>
));
