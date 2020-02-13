import React, { useEffect } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

import loader from '@/assets/animetions/loader.json';

// import { Container } from './styles';

export default React.memo(({ navigation }) => {
  useEffect(() => {
    setTimeout(() => navigation.navigate('Barbecues'), 3000);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LottieView source={loader} autoPlay loop resizeMode="contain" style={{ width: 200 }} />
    </View>
  );
});
