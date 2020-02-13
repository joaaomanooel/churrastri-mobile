import React, { useState } from 'react';
import { t } from '@/i18n';
import { Header, LargerCard } from '@/components';
import { Container, Button, ListContainer } from './StyledComponent';

export default React.memo(() => {
  const [showButton, setShowButton] = useState(true);
  return (
    <>
      <Container
        onScrollBeginDrag={() => setShowButton(false)}
        onScrollEndDrag={() => setShowButton(true)}
      >
        <Header />
        <ListContainer>
          <LargerCard />
          <LargerCard />
          <LargerCard />
          <LargerCard />
          <LargerCard />
          <LargerCard />
          <LargerCard />
          <LargerCard />
        </ListContainer>
      </Container>
      <Button show={showButton} text={t('addBarbecue').toUpperCase()} />
    </>
  );
});
