import { t } from '@/i18n';
import React, { useState } from 'react';
import { format, isValid } from 'date-fns';
import DatePicker from '@react-native-community/datetimepicker';
import CardToPicker from './CardToPicker';

export default React.memo(({ onSave, value }) => {
  const [date, setDate] = useState(isValid(value) ? value : new Date());
  const [show, setShow] = useState(false);

  const handleDate = (_event, newDate) => {
    setShow(false);
    setDate(newDate || date);
    onSave(date);
  };

  return (
    <>
      <CardToPicker
        value={format(date, 'dd/MM/yyyy')}
        onPress={() => setShow(true)}
        label={t('date')}
      />
      {!!show && (
        <DatePicker
          onChange={handleDate}
          display="calendar"
          locale="pt-br"
          value={date}
        />
      )}
    </>
  );
});
