import { t, toCurrency } from '@/i18n';
import React, { useState, useEffect } from 'react';
import { Input, Header, DatePicker, Select } from '@/components';
import { Alert } from 'react-native';
import {
  Container,
  Icon,
  Button,
  ArrowContainer,
  FormView,
  TrashContainer,
} from './StyledComponent';

export default ({
  updateBarbecues,
  removeBarbecues,
  addBarbecues,
  navigation,
  users: usr,
  loading,
  user,
}) => {
  const [showButton, setShowButton] = useState(true);

  const barbecue = navigation.getParam('barbecue') || {};
  const [title, setTitle] = useState(barbecue.title);
  const [description, setDescription] = useState(barbecue.description);
  const [price, setPrice] = useState(barbecue.price || toCurrency(0));
  const [date, setDate] = useState(barbecue.date);
  const [participants, setParticipants] = useState(barbecue.participants || []);
  const [users, setUsers] = useState(usr || []);

  const handleUsers = () => {
    const userParticipant = users.map(u => ({
      ...u,
      selected: !!participants.find(p => p._id === u._id),
    }));
    setUsers(userParticipant);
  };

  useEffect(() => {
    setParticipants(participants.map(p => ({ ...p, selected: true })));
  }, []);

  useEffect(() => {
    handleUsers();
  }, [participants, usr]);

  const unformatedPrice = () => price && price.replace('R$ ', '').replace(',', '.');

  const handlePrice = () => {
    const newPrice = unformatedPrice();
    newPrice && setPrice(toCurrency(parseFloat(newPrice || 0)));
  };

  const update = (data) => {
    updateBarbecues({ ...data, _id: barbecue._id });
    navigation.navigate('Barbecues');
  };

  const save = (data) => {
    addBarbecues(data);
    navigation.navigate('Barbecues');
  };

  const handleSave = () => {
    if (!title) return Alert.alert(t('error'), `${t('title')} ${t('isRequired')}`);
    const participantsId = participants.map(p => p._id);
    const data = {
      participants: participantsId,
      price: unformatedPrice(),
      description,
      title,
      date,
    };
    barbecue.owner ? update(data) : save(data);
    return navigation.goBack();
  };

  const remove = () => {
    removeBarbecues(barbecue._id);
    navigation.navigate('Barbecues');
  };

  return (
    <Container
      onScrollBeginDrag={() => setShowButton(false)}
      onScrollEndDrag={() => setShowButton(true)}
    >
      <ArrowContainer onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" />
      </ArrowContainer>
      {barbecue.owner === user._id && (
        <TrashContainer onPress={remove}>
          <Icon name="trash-can-outline" />
        </TrashContainer>
      )}
      <Header />
      <FormView>
        <Input placeholder={t('title')} onChangeText={setTitle} label={t('title')} value={title} />
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
        <Button text={t('save')} onPress={handleSave} disabled={loading} show={showButton} />
      </FormView>
    </Container>
  );
};
