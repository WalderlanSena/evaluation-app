import React, { useState, useContext, useEffect } from 'react';
import { KeyboardAvoidingView, StatusBar } from 'react-native';
import {
  Button,
  ButtonText,
  Container,
  ForgotPasswordContainer,
  ForgotPasswordText,
  Input,
  Logo,
} from './styles';
import { AuthContext } from '../../hooks/AuthContext';
import LogoImg from '../../assets/logo.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { showMessage } from 'react-native-flash-message';

export default function Login() {
  const { signIn, loading, error } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (error) {
      showMessage({
        message: 'Oppís! Login ou senha inválidos',
        type: 'danger',
        icon: 'warning',
      });
    }
  }, [error]);

  const handleLogin = () => {
    signIn({
      login: username,
      password: password,
    });
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#FFF" />
      <KeyboardAvoidingView behavior={'padding'} enabled>
        <Logo source={LogoImg} resizeMode={'contain'} />

        <Input
          placeholder={'Digite seu e-mail ou cpf'}
          autoCompleteType="off"
          autoCapitalize={'none'}
          value={username}
          onChangeText={text => setUsername(text)}
        />

        <Input
          placeholder={'Digite sua senha'}
          secureTextEntry
          autoCompleteType="off"
          autoCapitalize={'none'}
          value={password}
          onChangeText={text => setPassword(text)}
        />

        <Button primary disabled={loading} onPress={handleLogin}>
          <Icon name={'login'} size={20} color={'#FFF'} />
          <ButtonText> Acessar sua conta</ButtonText>
        </Button>

        <ForgotPasswordContainer>
          <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
        </ForgotPasswordContainer>
      </KeyboardAvoidingView>
    </Container>
  );
}
