import SignUp from '@views/auth/SignUp';
import React, {FC} from 'react';
import './src/localisation/i18n';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import SignIn from '@views/auth/SignIn';
import ForgotPassword from '@views/auth/ForgotPassword';
import Verification from '@views/auth/Verification';
const App: React.FC = () => {
  return <Verification />;
};

export default App;
