import React from 'react';
import { ButtonText, Container } from './styles';

export default function Button({ title, icon, ...rest }) {
  return (
    <Container {...rest}>
      {icon}
      <ButtonText> {title}</ButtonText>
    </Container>
  );
}
