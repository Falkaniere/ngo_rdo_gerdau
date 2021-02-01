import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';
import logoImage from '../../assets/logo.png';

const Login: React.FC = () => {
  return (
    <>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          enabled
        >
          <Container>
            <Image source={logoImage} />
            <Input />
            <Input />
            <Button>Login</Button>
          </Container>
        </KeyboardAvoidingView>
      </ScrollView>
    </>
  );
};

export default Login;
