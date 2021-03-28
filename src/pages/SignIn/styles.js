import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: center;
`;

export const Logo = styled.Image`
  margin-bottom: 10px;
  width: 100%;
`;

export const Input = styled.TextInput`
  font-size: 16px;
  padding: 15px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  padding: 15px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.primary ? '#371585' : '#EBA111')};
  background-color: ${props => (props.disabled === true ? '#CCC' : '#371585')};
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const ForgotPasswordContainer = styled.TouchableOpacity`
  margin-top: 15px;
`;

export const ForgotPasswordText = styled.Text`
  color: #eba111;
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
`;
