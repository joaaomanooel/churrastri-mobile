import React, { useEffect } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

import loader from '@/assets/animetions/loader.json';

export default ({ navigation, user }) => {
  useEffect(() => {
    !user._id
      ? navigation.replace('Login')
      : setTimeout(() => navigation.replace('Barbecues'), 3000);
  }, [user]);

  return !!user._id && (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LottieView source={loader} autoPlay loop resizeMode="contain" style={{ width: 200 }} />
    </View>
  );
};
