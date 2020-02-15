import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { t } from '@/i18n';
import { Input, Header, Button, TrincaLogo } from '@/components';
import { Container, FormContainer } from './StyledComponent';

export default React.memo(({ navigation, login, loading, error, user }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => login({ email, password });

  useEffect(() => {
    error && Alert.alert(t('error'), t('loginError'));
  }, [error]);

  useEffect(() => {
    user._id && navigation.navigate('Main');
  }, [user]);
  return (
    <Container>
      <Header />
      <FormContainer>
        <Input
          value={email}
          label={t('email')}
          onChangeText={setEmail}
          placeholder={t('email')}
          autoCompleteType="email"
        />
        <Input
          placeholder={t('password')}
          autoCompleteType="password"
          onChangeText={setPassword}
          label={t('password')}
          value={password}
          secureTextEntry
        />
        <Button disabled={loading} text={t('enter').toUpperCase()} onPress={handleLogin} />
      </FormContainer>
      <TrincaLogo />
    </Container>
  );
});
