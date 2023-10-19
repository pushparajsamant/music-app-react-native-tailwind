import Form from '@components/form';
import AuthInput from '@components/form/AuthInput';
import SubmitBtn from '@components/form/SubmitBtn';
import AppLink from '@ui/AppLink';
import CircleUI from '@ui/CircleUI';
import colors from '@utils/colors';
import COLORS from '@utils/colors';
import {Formik} from 'formik';
import React, {FC, useState} from 'react';
import {
  Image,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {IMAGENAME} from '../../assets/images';
import * as yup from 'yup';
import Header from '@ui/Header';
import {useTranslation} from 'react-i18next';
import AuthFormContainer from '@components/AuthFormContainer';

interface Props {}
const initialValues = {
  email: '',
  password: '',
};
const loginValidationSchema = yup.object({
  email: yup
    .string()
    .required('Email is a required field')
    .email('Not a valid email'),
  password: yup.string().required('Password is a required field'),
});

const SignIn: FC<Props> = props => {
  const [showPassword, setShowPassword] = useState(false);
  const {t} = useTranslation();
  const toggleCallback = () => {
    setShowPassword(prev => !prev);
  };
  return (
    <SafeAreaView className="flex flex-1 bg-[#443333] items-center justify-center">
      <AuthFormContainer heading={t('common:welcomeBack')}>
        <View className="mt-5">
          <Form<{email: string; password: string}>
            onSubmit={values => {
              console.log(values);
            }}
            initialValues={initialValues}
            validationSchema={loginValidationSchema}>
            <View className="w-full">
              <AuthInput
                name="email"
                placeholder="john@email.com"
                label={t('common:email')}
                keyboardType="email-address"
                autoCapitalize="none"
                containerClassName="mb-4"
                // error={errors.email}
                // value={values.email}
                // onChangeText={handleChange('email')}
              />
              <AuthInput
                name="password"
                placeholder="**************"
                label={t('common:password')}
                autoCapitalize="none"
                isPassword={!showPassword}
                containerClassName="mb-4"
                onRightIconPress={toggleCallback}
                rightIcon={showPassword ? 'eye-slash' : 'eye'}
                // value={values.password}
                // error={errors.password}
                // onChangeText={handleChange('password')}
              />
              <SubmitBtn title="Sign In" />
            </View>
          </Form>

          <View className="flex-row mt-4 justify-between items-center">
            <AppLink title={'Forgot Password?'} />
            <AppLink title={'Sign In'} />
          </View>
        </View>
      </AuthFormContainer>
    </SafeAreaView>
  );
};
export default SignIn;
