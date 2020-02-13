import styled from 'styled-components/native';
import { colors, layout } from '@/constants';

export const Container = styled.KeyboardAvoidingView`
  background-color: ${colors.yellow()};
  justify-content: space-between;
  height: ${layout.screenHeight};
  width: ${layout.screenWidth};
  flex: 1;
`;

export const FormContainer = styled.View`
  padding-vertical: ${layout.scale() * 15};
  width: ${layout.screenWidth};
  flex: 1;
`;
