import { t } from '@/i18n';
import Modal from 'react-native-modal';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { colors, layout } from '@/constants';
import CardToPicker from './CardToPicker';

const PickerContainer = styled.View`
  background-color: ${colors.white(0.95)};
  border-radius: ${layout.scale() * 20};
  width: ${layout.screenWidth * 0.9};
  height: ${(layout.screenHeight / 6) * 4};
  elevation: 2;
  z-index: 10;
  margin: 0;
`;

const ButtomContainer = styled.View`
  padding-horizontal: ${layout.scale() * 10};
  justify-content: space-between;
  flex-direction: row;
`;

const Touchable = styled.TouchableOpacity.attrs({ activeOpacity: 0.80 })`
  padding-horizontal: ${layout.scale() * 30};
  padding-vertical: ${layout.scale() * 30};
`;

const Text = styled.Text`
  font-size: ${layout.scale() * 16};
  color: ${colors.black()};
`;

const ItemContainer = styled.TouchableOpacity.attrs({ activeOpacity: 0.80 })`
  ${layout.shadow}
  padding-horizontal: ${layout.scale() * 20};
  padding-vertical: ${layout.scale() * 15};
  margin-vertical: ${layout.scale() * 5};
  background-color: ${({ selected }) => (selected ? colors.yellow() : colors.white())};
  width: ${layout.screenWidth * 0.8};
  height: ${layout.scale() * 50};
  flex-direction: row;
  align-self: center;
`;

const Name = styled.Text`
  font-size: ${layout.scale() * 16};
  color: ${colors.black()};
`;

const ListView = styled.ScrollView``;

export default React.memo(({ data: usr = [], participants, onSave = () => { } }) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(usr || []);
  const [oldData, setOldData] = useState(usr || []);

  useEffect(() => {
    setData(usr);
  }, [usr]);

  const handleItem = (item) => {
    const users = data.filter(i => i._id !== item._id);
    setData([...users, { ...item, selected: !item.selected }]);
  };

  const sortByName = e => e.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    if (a.createdAt > b.createdAt) return 1;
    if (a.createdAt < b.createdAt) return -1;
    if (a._id > b._id) return 1;
    if (a._id < b._id) return -1;
    return 0;
  });

  const save = () => {
    onSave(data.filter(i => i.selected));
    setOldData(data);
    setShow(false);
  };

  const cancel = () => {
    setData(oldData);
    setShow(false);
  };

  return (
    <>
      <CardToPicker
        value={`${[...participants.map(i => i.selected && i.username)]}`}
        onPress={() => setShow(true)}
        label={t('participants')}
      />
      <Modal style={{ padding: 0 }} useNativeDriver isVisible={show}>
        <PickerContainer>
          <ButtomContainer>
            <Touchable onPress={cancel}><Text>{t('cancel')}</Text></Touchable>
            <Touchable onPress={save}><Text>{t('save')}</Text></Touchable>
          </ButtomContainer>
          <ListView>
            {sortByName(data).map((i) => {
              return (
                <ItemContainer key={i._id} selected={i.selected} onPress={() => handleItem(i)}>
                  <Name ellipsizeMode="tail" numberOfLines={1}>{i.username}</Name>
                </ItemContainer>
              );
            })}
          </ListView>
        </PickerContainer>
      </Modal>
    </>
  );
});
