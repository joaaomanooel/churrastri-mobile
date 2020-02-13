import React from 'react';
import styled from 'styled-components/native';
import { layout, images } from '@/constants';

const Image = styled.Image`
  justify-content: flex-end;
  align-self: center;
  bottom: ${layout.scale() * 50};
  height: ${layout.scale() * 50};
  width: ${layout.scale() * 50};
`;

export default React.memo(() => <Image source={images.trincaLogo} />);
