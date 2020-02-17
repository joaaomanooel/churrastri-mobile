import { t, toCurrency } from '@/i18n';
import React, { useState } from 'react';
import { Header, LargerCard } from '@/components';
import {
  Container,
  ArrowContainer,
  ArrowIcon,
  Button,
  TopContainer,
  Description,
  ItemContainer,
  Name,
  Label,
  LabelText,
  ListView,
  EditContainer,
  EditIcon,
  Price,
} from './StyledComponent';

export default ({ navigation, user }) => {
  const [showButton, setShowButton] = useState(true);
  const barbecue = navigation.getParam('barbecue') || {};

  const sortByName = e => e.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    if (a.createdAt > b.createdAt) return 1;
    if (a.createdAt < b.createdAt) return -1;
    if (a._id > b._id) return 1;
    if (a._id < b._id) return -1;
    return 0;
  });

  const [participants, setParticipants] = useState(sortByName(barbecue.participants || []));

  const handlePaid = (participant) => {
    const users = participants.filter(i => i._id !== participant._id);
    setParticipants(sortByName([...users, { ...participant, paid: !participant.paid }]));
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
        {barbecue.owner === user._id && (
          <EditContainer onPress={() => navigation.navigate('BarbecueForms', { barbecue })}>
            <EditIcon />
          </EditContainer>
        )}
        <Header />
        <TopContainer>
          <LargerCard data={barbecue} size={1.3} />
        </TopContainer>
        <Description>{barbecue.description}</Description>
        <ListView>
          {participants.length && participants.map(participant => (
            <ItemContainer>
              <Name ellipsizeMode="tail" numberOfLines={1}>{participant.name}</Name>
              <Price>{toCurrency((barbecue.price || 0) / participants.length)}</Price>
              <Label onPress={() => handlePaid(participant)} isPaid={participant.paid}>
                <LabelText>{participant.paid ? t('paid') : t('noPaid')}</LabelText>
              </Label>
            </ItemContainer>
          ))}
        </ListView>
      </Container>
      <Button text={t('save')} show={showButton} />
    </>
  );
};
