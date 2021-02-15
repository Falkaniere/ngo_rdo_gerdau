import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

import Login from './pages/login';

// import { Container } from './styles';

const src: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <Login />
    </>
  );
};

export default src;
