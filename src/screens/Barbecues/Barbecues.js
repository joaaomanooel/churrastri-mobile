import React, { useState } from 'react';
import { t } from '@/i18n';
import { Header, LargerCard } from '@/components';
import { Container, Button, ListContainer, EmptyState } from './StyledComponent';

export default React.memo(() => {
  const [showButton, setShowButton] = useState(true);
  const barbecues = [];
  return (
    <>
      <Container
        onScrollBeginDrag={() => setShowButton(false)}
        onScrollEndDrag={() => setShowButton(true)}
      >
        <Header />
        <ListContainer>
          {barbecues.map(data => <LargerCard data={data} />)}
        </ListContainer>
        {!barbecues.length && <EmptyState>{t('emptyStates.barbecues')}</EmptyState>}
      </Container>
      <Button show={showButton} text={t('addBarbecue').toUpperCase()} />
    </>
  );
});
