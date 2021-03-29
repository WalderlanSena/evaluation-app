import styled from 'styled-components';

export const Container = styled.TouchableOpacity`
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
