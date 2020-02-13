import React, { useEffect } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

import loader from '@/assets/animetions/loader.json';

// import { Container } from './styles';

export default React.memo(({ navigation }) => {
  useEffect(() => {
    setTimeout(() => navigation.navigate('Barbecues'), 500);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Text style={{ fontSize: 36 }}>Churras Trinca</Text> */}
      <LottieView source={loader} autoPlay loop resizeMode="contain" style={{ width: 200 }} />
    </View>
  );
});
