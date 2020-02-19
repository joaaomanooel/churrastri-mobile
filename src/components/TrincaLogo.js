import React from 'react';
import styled from 'styled-components/native';
import { layout, images } from '@/constants';

const Image = styled.Image`
  position: absolute;
  align-self: center;
  bottom: ${layout.scale() * 20};
  height: ${layout.scale() * 50};
  width: ${layout.scale() * 50};
  top: ${layout.screenHeight - 100};
`;

export default React.memo(() => <Image source={images.trincaLogo} />);
