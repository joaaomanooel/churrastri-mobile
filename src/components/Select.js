// import Modal from 'react-native-modal';
// import React, { useState } from 'react';
// import styled from 'styled-components/native';
// import { colors, layout } from '@/constants';
// import CardToPicker from './CardToPicker';

// const PickerContainer = styled.View`
//   background-color: ${colors.white(0.95)};
//   border-radius: ${layout.scale() * 20};
//   width: ${layout.screenWidth * 0.9};
//   height: ${layout.scale() * 300};
//   justify-content: center;
//   position: absolute;
//   elevation: 2;
//   z-index: 10;
//   margin: 0;
// `;

// export default function components() {
//   const [show, setShow] = useState(false);

//   return (
//     <>
//       <CardToPicker
//         onPress={() => setShow(true)}
//         label={t('participants')}
//       />
//       <Modal style={{ padding: 0 }} useNativeDriver isVisible={show}>
//         <PickerContainer />
//       </Modal>
//     </>
//   );
// }
