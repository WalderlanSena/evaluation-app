import React, {useContext} from 'react';
import {Text, Button} from 'react-native';
import {Container} from './styles';
import {AuthContext} from '../hooks/AuthContext';

export default function Login({navigation}) {
  const {auth, setAuth} = useContext(AuthContext);

  return (
    <Container>
      <Text>Hello World !</Text>
      <Button
        title={'Login'}
        onPress={() => setAuth({...auth, signed: true})}
      />
    </Container>
  );
}
