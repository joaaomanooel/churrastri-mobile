import React from 'react';
import { t } from '@/i18n';
import { Input, Header, Button, TrincaLogo } from '@/components';
import { Container, FormContainer } from './StyledComponent';

export default React.memo(() => {
  return (
    <Container>
      <Header />
      <FormContainer>
        <Input label={t('email')} placeholder={t('email')} autoCompleteType="email" />
        <Input
          secureTextEntry
          placeholder={t('password')}
          label={t('password')}
          autoCompleteType="password"
        />
        <Button text={t('enter').toUpperCase()} />
      </FormContainer>
      <TrincaLogo />
    </Container>
  );
});
