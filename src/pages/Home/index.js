import React, { useEffect, useContext } from 'react';
import { Text, StatusBar } from 'react-native';
import { Container } from './styles';
import { AuthContext } from '../../hooks/AuthContext';

export default function Home() {
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    console.log(auth);
  }, [auth]);

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#371585" />
      <Text>Home</Text>
    </Container>
  );
}
