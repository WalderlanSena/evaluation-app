import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import { Container } from './styles';

function Input({ ...rest }, ref) {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current?.focus();
    },
  }));

  return <Container ref={inputRef} {...rest} />;
}

export default forwardRef(Input);
