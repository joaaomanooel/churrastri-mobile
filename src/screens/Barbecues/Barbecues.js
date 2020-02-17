import React, { useState, useEffect } from 'react';
import { t } from '@/i18n';
import { Header, LargerCard } from '@/components';
import { Container, Button, ListContainer, EmptyState, CardContainer } from './StyledComponent';

export default ({ navigation, barbecues: bbq }) => {
  const [showButton, setShowButton] = useState(true);
  const [barbecues, setBarbecues] = useState(bbq || []);

  useEffect(() => {
    setBarbecues(bbq || []);
  }, [bbq]);

  return (
    <>
      <Container
        onScrollBeginDrag={() => setShowButton(false)}
        onScrollEndDrag={() => setShowButton(true)}
      >
        <Header />
        <ListContainer>
          {barbecues.length && barbecues.map(barbecue => (
            <CardContainer onPress={() => navigation.navigate('BarbecueDetail', { barbecue })}>
              <LargerCard data={barbecue} />
            </CardContainer>
          ))}
        </ListContainer>
        {!barbecues.length && <EmptyState>{t('emptyStates.barbecues')}</EmptyState>}
      </Container>
      <Button
        onPress={() => navigation.navigate('BarbecueForms')}
        text={t('addBarbecue')}
        show={showButton}
      />
    </>
  );
};
