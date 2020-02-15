import { t, toCurrency } from '@/i18n';
import React, { useState } from 'react';
import { Input, Header, DatePicker, Select } from '@/components';
import { Container, ArrowIcon, Button, ArrowContainer } from './StyledComponent';

export default React.memo(({ navigation }) => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [date, setDate] = useState(new Date());
  const [participants, setParticipants] = useState([]);
  const [users, setUsers] = useState([
    {
      createdAt: '2020-02-04T07:44:48.939Z',
      _id: '5e39215283455023371fa9033a',
      email: 'joaomanoel@gmail.com',
      name: 'João Manoel Neto',
      __v: 0,
    },
    {
      createdAt: '2020-02-04T07:44:48.939Z',
      _id: '5e39215283455023371fa9032b',
      email: 'joaomanoel@gmail.com',
      name: 'Goão Manoel Neto',
      __v: 0,
    },
    {
      createdAt: '2020-02-04T07:44:48.939Zc',
      _id: '5e39215283455023371fa9031',
      email: 'joaomanoel@gmail.com',
      name: 'Manoel Neto',
      __v: 0,
    },
  ]);

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
      <Select data={users} onSave={setParticipants} />
      <Button text={t('save').toUpperCase()} />
    </Container>
  );
});
