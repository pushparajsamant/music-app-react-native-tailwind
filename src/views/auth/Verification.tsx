import Form from '@components/form';
import AuthInput from '@components/form/AuthInput';
import SubmitBtn from '@components/form/SubmitBtn';
import AppLink from '@ui/AppLink';
import CircleUI from '@ui/CircleUI';
import colors from '@utils/colors';
import COLORS from '@utils/colors';
import {Formik} from 'formik';
import React, {FC, useEffect, useRef, useState} from 'react';
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
import OTPField from '@ui/OTPField';
import AppButton from '@ui/AppButton';

interface Props {}

const SignIn: FC<Props> = props => {
  const otpArray = new Array(6).fill('');
  const [otp, setOtp] = useState([...otpArray]);
  const [activeOtpIndex, setActiveOtpIndex] = useState(0);
  const inputRef = useRef<TextInput>();
  const {t} = useTranslation();
  const handleChange = (value: string, index: number) => {
    let newOtp = [...otp];
    if (value === 'Backspace') {
      //move to previous only if fiend is empty
      if (!otp[index]) {
        setActiveOtpIndex(prev => prev - 1);
      }
      newOtp[index] = '';
    } else {
      newOtp[index] = value;
      setActiveOtpIndex(prev => prev + 1);
    }
    setOtp(newOtp);
  };
  const handlePaste = (val: string) => {
    if (val.length === 6) {
      let otpString = val.split('');
      setOtp([...otpString]);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtpIndex]);
  //console.log(otpArray);
  return (
    <SafeAreaView className="flex flex-1 bg-[#443333] items-center justify-center">
      <AuthFormContainer heading={t('common:welcomeBack')}>
        <View className="mt-5">
          <View>
            <View className="w-full flex-row justify-between items-center mb-4">
              {otpArray.map((_, index) => (
                <OTPField
                  onKeyPress={({nativeEvent}) => {
                    handleChange(nativeEvent.key, index);
                  }}
                  onChangeText={val => handlePaste(val)}
                  key={index}
                  value={otp[index]}
                  keyboardType="numeric"
                  ref={index === activeOtpIndex ? inputRef : null}
                  placeholder="*"
                  placeholderTextColor={colors.INACTIVE_CONTRAST}
                />
              ))}
            </View>
            <AppButton title="Sign In" />
          </View>

          <View className="flex-row mt-4 justify-between items-center">
            <AppLink title={''} />
            <AppLink title={'Re-send OTP'} />
          </View>
        </View>
      </AuthFormContainer>
    </SafeAreaView>
  );
};
export default SignIn;
