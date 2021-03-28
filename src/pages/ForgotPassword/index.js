import React, { useState, useContext } from 'react';
import {
  KeyboardAvoidingView,
  StatusBar,
  Platform,
  ScrollView,
} from 'react-native';
import { Container, Logo } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { AuthContext } from '../../hooks/AuthContext';
import LogoImg from '../../assets/logo.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ForgotPasswordContainer, ForgotPasswordText } from '../SignIn/styles';

export default function ForgetPassword({ navigation }) {
  const { loading } = useContext(AuthContext);
  const [username, setUsername] = useState('');

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
            returnKeyType={'send'}
            onSubmitEditing={() => alert('Verifique seu e-email :)')}
          />

          <Button
            title={'Recuperar senha'}
            primary
            disabled={loading}
            icon={<Icon name={'vpn-key'} size={20} color={'#FFF'} />}
          />

          <ForgotPasswordContainer onPress={() => navigation.goBack()}>
            <ForgotPasswordText>Fazer login</ForgotPasswordText>
          </ForgotPasswordContainer>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
