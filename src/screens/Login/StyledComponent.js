import styled from 'styled-components/native';
import { colors, layout } from '@/constants';

export const Container = styled.ScrollView`
  background-color: ${colors.yellow()};
  height: ${layout.screenHeight};
  width: ${layout.screenWidth};
  flex: 1;
`;

export const FormContainer = styled.KeyboardAvoidingView`
  padding-vertical: ${layout.scale() * 15};
  width: ${layout.screenWidth};
  flex: 1;
`;
