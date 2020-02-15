import React, { useState } from 'react';
import { t } from '@/i18n';
import { Header, LargerCard } from '@/components';
import { Container, Button, ListContainer, EmptyState } from './StyledComponent';

export default React.memo(({ navigation, barbecues: bbq }) => {
  const [showButton, setShowButton] = useState(true);
  const [barbecues] = useState(bbq || []);
  return (
    <>
      <Container
        onScrollBeginDrag={() => setShowButton(false)}
        onScrollEndDrag={() => setShowButton(true)}
      >
        <Header />
        <ListContainer>
          {barbecues.length && barbecues.map(data => <LargerCard data={data} />)}
        </ListContainer>
        {!barbecues.length && <EmptyState>{t('emptyStates.barbecues')}</EmptyState>}
      </Container>
      <Button
        onPress={() => navigation.navigate('BarbecueForms')}
        text={t('addBarbecue').toUpperCase()}
        show={showButton}
      />
    </>
  );
});
