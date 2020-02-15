import { t, toCurrency } from '@/i18n';
import React, { useState, useEffect } from 'react';
import { Input, Header, DatePicker, Select } from '@/components';
import { Alert } from 'react-native';
import { Container, ArrowIcon, Button, ArrowContainer, FormView } from './StyledComponent';

export default React.memo(({ navigation, users: usr, addBarbecues }) => {
  const [showButton, setShowButton] = useState(true);

  const barbecue = navigation.getParam('barbecue') || {};
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [date, setDate] = useState(new Date());
  const [participants, setParticipants] = useState(barbecue.participants || []);
  const [users, setUser] = useState(usr || []);

  const handleUsers = () => {
    const userParticipant = users.map(u => ({
      ...u,
      selected: !!participants.find(p => p._id === u._id),
    }));
    setUser(userParticipant);
  };

  useEffect(() => {
    handleUsers();
  }, [participants]);

  const unformatedPrice = () => price.replace('R$ ', '').replace(',', '.');

  const handlePrice = () => {
    const newPrice = unformatedPrice();
    newPrice && setPrice(toCurrency(parseFloat(newPrice)));
  };

  const handleSave = () => {
    if (!title) return Alert.alert(t('error'), `${t('title')} ${t('isRequired')}`);
    const participantsId = participants.map(p => p._id);
    const data = {
      participants: participantsId,
      price: unformatedPrice,
      description,
      title,
      date,
    };
    addBarbecues(data);
    return navigation.goBack();
  };

  return (
    <>
      <Container
        onScrollBeginDrag={() => setShowButton(false)}
        onScrollEndDrag={() => setShowButton(true)}
      >
        <ArrowContainer onPress={() => navigation.goBack()}>
          <ArrowIcon />
        </ArrowContainer>
        <Header />
        <FormView>
          <Input
            placeholder={t('title')}
            onChangeText={setTitle}
            label={t('title')}
            value={title}
          />
          <Input
            multiline
            maxLength={140}
            value={description}
            numberOfLines={null}
            label={t('description')}
            onChangeText={setDescription}
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
          <DatePicker value={date} onSave={setDate} />
          <Select data={users} participants={participants} onSave={setParticipants} />
        </FormView>
      </Container>
      <Button text={t('save').toUpperCase()} onPress={handleSave} show={showButton} />
    </>
  );
});
