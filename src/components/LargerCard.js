import React from 'react';
import { format, parseISO } from 'date-fns';
import styled from 'styled-components/native';
import { toCurrency } from '@/i18n';
import { colors, layout } from '@/constants';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const DateContainer = styled.View`
  border-right-width: ${layout.scale() * 3};
  border-right-color: ${colors.black(0.8)};
  padding-right: ${layout.scale() * 20};
  justify-content: center;
  align-items: center;
`;

const DateBigText = styled.Text`
  font-size: ${({ contentSize }) => contentSize * (layout.scale() * 24)};
  color: ${colors.black(0.8)};
  font-weight: 900;
`;

const RightView = styled.View`
  padding-left: ${layout.scale() * 20};
  justify-content: space-between;
  flex:1;
`;

const Title = styled.Text.attrs({ ellipsizeMode: 'tail', numberOfLines: 1 })`
  font-size: ${({ contentSize }) => contentSize * (layout.scale() * 16)};
  color: ${colors.black(0.8)};
  font-weight: 800;
`;

const BottomView = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const Icon = styled(MaterialIcon).attrs(({ contentSize }) => ({
  size: contentSize * layout.scale() * 20,
  color: colors.yellow(),
}))``;

const BottomText = styled.Text`
  padding-left: ${layout.scale() * 5};
  font-size: ${({ contentSize }) => contentSize * (layout.scale() * 16)};
  color: ${colors.black(0.8)};
  font-weight: 400;
`;

export default React.memo(({ data = {}, size = 1 }) => {
  const date = data.date ? parseISO(data.date) : new Date();
  return (
    <>
      <DateContainer>
        <DateBigText contentSize={size}>{format(date, 'dd')}</DateBigText>
        <DateBigText contentSize={size}>{format(date, 'MM')}</DateBigText>
      </DateContainer>
      <RightView>
        <Title contentSize={size}>{data.title}</Title>
        <BottomView>
          <BottomView>
            <Icon name="account-multiple-outline" contentSize={size} />
            <BottomText contentSize={size}>
              {!!data.participants && data.participants.length || 0}
            </BottomText>
          </BottomView>
          <BottomView>
            <BottomText contentSize={size}>{toCurrency(data.price || 0)}</BottomText>
          </BottomView>
        </BottomView>
      </RightView>
    </>
  );
});
