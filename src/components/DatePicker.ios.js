import { t } from '@/i18n';
import Modal from 'react-native-modal';
import React, { useState } from 'react';
import { format, isValid } from 'date-fns';
import styled from 'styled-components/native';
import DatePicker from '@react-native-community/datetimepicker';
import { colors, layout } from '@/constants';
import CardToPicker from './CardToPicker';

const Touchable = styled.TouchableOpacity.attrs({ activeOpacity: 0.80 })`
  padding-horizontal: ${layout.scale() * 30};
  padding-vertical: ${layout.scale() * 10};
`;

const PickerContainer = styled.View`
  background-color: ${colors.white(0.95)};
  border-radius: ${layout.scale() * 20};
  width: ${layout.screenWidth * 0.9};
  height: ${layout.scale() * 300};
  justify-content: center;
  position: absolute;
  elevation: 2;
  z-index: 10;
  margin: 0;
`;

const ButtomContainer = styled.View`
  padding-horizontal: ${layout.scale() * 10};
  justify-content: space-between;
  flex-direction: row;
`;

const Text = styled.Text`
  font-size: ${layout.scale() * 16};
  color: ${colors.black(0.8)};
`;

export default React.memo(({ onSave, value }) => {
  const [date, setDate] = useState(isValid(value) ? value : new Date());
  const [currentDate, setCurrentDate] = useState(isValid(value) ? value : new Date());
  const [show, setShow] = useState(false);

  const handleDate = (_event, newDate) => {
    setDate(newDate || date);
  };

  const handleClose = (isSave = false) => {
    if (isSave) {
      onSave(date);
      setCurrentDate(date || currentDate);
    }
    setShow(false);
  };

  return (
    <>
      <CardToPicker
        value={`${format(currentDate, 'dd/MM/yyyy')}`}
        onPress={() => setShow(true)}
        label={t('date')}
      />
      <Modal style={{ padding: 0 }} useNativeDriver isVisible={show}>
        <PickerContainer>
          <ButtomContainer>
            <Touchable onPress={() => handleClose(false)}><Text>{t('cancel')}</Text></Touchable>
            <Touchable onPress={() => handleClose(true)}><Text>{t('save')}</Text></Touchable>
          </ButtomContainer>
          <DatePicker onChange={handleDate} display="calendar" locale="pt-br" value={date} />
        </PickerContainer>
      </Modal>
    </>
  );
});
