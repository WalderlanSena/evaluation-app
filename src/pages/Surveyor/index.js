import React from 'react';
import { Text, StatusBar } from 'react-native';
import { Container } from './styles';

export default function Surveyor() {
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#371585" />
      <Text>Surveyor</Text>
    </Container>
  );
}
