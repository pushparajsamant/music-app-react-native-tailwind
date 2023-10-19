import Form from '@components/form';
import AuthInput from '@components/form/AuthInput';
import SubmitBtn from '@components/form/SubmitBtn';
import AppLink from '@ui/AppLink';
import React, {FC, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import * as yup from 'yup';
import {useTranslation} from 'react-i18next';
import AuthFormContainer from '@components/AuthFormContainer';

interface Props {}
const initialValues = {
  email: '',
  password: '',
};
const forgotPasswordValidationSchema = yup.object({
  email: yup
    .string()
    .required('Email is a required field')
    .email('Not a valid email'),
});

const ForgotPassword: FC<Props> = props => {
  const {t} = useTranslation();
  return (
    <SafeAreaView className="flex flex-1 bg-[#443333] items-center justify-center">
      <AuthFormContainer
        heading={t('common:forgotPassword')}
        subHeading={t('common:forgotPasswordDesc')}>
        <View className="mt-5">
          <Form<{email: string; password: string}>
            onSubmit={values => {
              console.log(values);
            }}
            initialValues={initialValues}
            validationSchema={forgotPasswordValidationSchema}>
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
              <SubmitBtn title="Send Link" />
            </View>
          </Form>

          <View className="flex-row mt-4 justify-between items-center">
            <AppLink title={'Sign In'} />
            <AppLink title={'Sign Up'} />
          </View>
        </View>
      </AuthFormContainer>
    </SafeAreaView>
  );
};
export default ForgotPassword;
