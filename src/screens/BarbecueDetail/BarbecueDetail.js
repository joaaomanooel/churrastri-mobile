import { t, toCurrency } from '@/i18n';
import React, { useState } from 'react';
import { Input, Header, DatePicker } from '@/components';
import { Container, ArrowIcon, Button, ArrowContainer } from './StyledComponent';

export default React.memo(({ navigation }) => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [date, setDate] = useState(new Date());
  const [participants, setParticipants] = useState();

  const handlePrice = () => {
    const newPrice = price.replace('R$ ', '').replace(',', '.');
    newPrice && setPrice(toCurrency(parseFloat(newPrice)));
  };

  return (
    <Container>
      <ArrowContainer onPress={() => navigation.goBack()}>
        <ArrowIcon />
      </ArrowContainer>
      <Header />
      <Input onChangeText={setTitle} label={t('title')} value={title} placeholder={t('title')} />
      <DatePicker value={date} onSave={setDate} />
      <Input
        value={description}
        onChangeText={setDescription}
        label={t('description')}
        placeholder={t('description')}
      />
      <Input
        placeholder={t('price')}
        onChangeText={setPrice}
        keyboardType="numeric"
        onBlur={handlePrice}
        label={t('price')}
        value={price}
      />
      <Input
        placeholder={t('participants')}
        onChangeText={setParticipants}
        label={t('participants')}
        value={participants}
      />
      <Button text={t('save').toUpperCase()} />
    </Container>
  );
});
