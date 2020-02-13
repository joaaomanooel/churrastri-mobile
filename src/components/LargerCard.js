import React from 'react';
import { format, parseISO } from 'date-fns';
import styled from 'styled-components/native';
import { toCurrency } from '@/i18n';
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

const DateBigText = styled.Text`
  font-size: ${layout.scale() * 24};
  color: ${colors.black(0.8)};
  font-weight: 900;
`;

const RightView = styled.View`
  padding-left: ${layout.scale() * 20};
  justify-content: space-between;
  flex:1;
`;

const Title = styled.Text.attrs({ ellipsizeMode: 'tail', numberOfLines: 1 })`
  font-size: ${layout.scale() * 16};
  color: ${colors.black(0.8)};
  font-weight: 800;
`;

const BottomView = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const Icon = styled(MaterialIcon).attrs(() => ({
  size: layout.scale() * 20,
  color: colors.yellow(),
}))``;

const BottomText = styled.Text`
  padding-left: ${layout.scale() * 5};
  font-size: ${layout.scale() * 16};
  color: ${colors.black(0.8)};
  font-weight: 400;
`;

export default React.memo(({ data = {} }) => {
  const date = data.date ? parseISO(data.date) : new Date();
  return (
    <Container>
      <DateContainer>
        <DateBigText>{format(date, 'dd')}</DateBigText>
        <DateBigText>{format(date, 'MM')}</DateBigText>
      </DateContainer>
      <RightView>
        <Title>{data.title}</Title>
        <BottomView>
          <BottomView>
            <Icon name="supervisor-account" />
            <BottomText>{data.participants && data.participants.length}</BottomText>
          </BottomView>
          <BottomView>
            <Icon name="monetization-on" />
            <BottomText>{toCurrency(data.price || 0)}</BottomText>
          </BottomView>
        </BottomView>
      </RightView>
    </Container>
  );
});
