import React, { useState, useContext, useEffect, useRef } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Keyboard
} from 'react-native';
import {
  Container,
  ForgotPasswordContainer,
  ForgotPasswordText,
  Logo,
} from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { AuthContext } from '../../hooks/AuthContext';
import LogoImg from '../../assets/logo.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { showMessage } from 'react-native-flash-message';

export default function Login({ navigation }) {
  const { signIn, loading, error } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const passwordInputRef = useRef();

  useEffect(() => {
    if (error) {
      showMessage({
        message: 'Login ou senha inválidas',
        description:
          'Verifique se seu cpf, e-mail ou senha foram digitados corretamente.',
        type: 'danger',
        icon: 'warning',
        duration: 6000,
      });
    }
  }, [error]);

  const handleLogin = () => {
    Keyboard.dismiss();
    signIn({
      login: username,
      password: password,
    });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled>
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        contentContainerStyle={{ flex: 1 }}>
        <Container>
          <StatusBar barStyle="light-content" backgroundColor="#FFF" />
          <Logo source={LogoImg} resizeMode={'contain'} />

          <Input
            placeholder={'Digite seu e-mail ou cpf'}
            autoCompleteType="off"
            autoCapitalize={'none'}
            keyboardType={'email-address'}
            value={username}
            onChangeText={text => setUsername(text)}
            returnKeyType={'next'}
            onSubmitEditing={() => {
              passwordInputRef?.current?.focus();
            }}
          />

          <Input
            ref={passwordInputRef}
            placeholder={'Digite sua senha'}
            secureTextEntry
            autoCompleteType="off"
            autoCapitalize={'none'}
            value={password}
            onChangeText={text => setPassword(text)}
            returnKeyType={'send'}
            onSubmitEditing={handleLogin}
          />

          <Button
            title={'Acessar sua conta'}
            primary
            disabled={loading}
            onPress={handleLogin}
            icon={<Icon name={'login'} size={20} color={'#FFF'} />}
          />

          <ForgotPasswordContainer
            onPress={() => navigation.navigate('ForgotPassword')}>
            <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
          </ForgotPasswordContainer>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
