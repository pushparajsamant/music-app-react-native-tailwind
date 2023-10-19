import React, {FC, forwardRef} from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';

interface Props extends TextInputProps {
  ref: any;
}

const OTPField = forwardRef<TextInput, Props>((props, ref) => {
  return (
    <TextInput
      {...props}
      ref={ref}
      className="w-14 h-14 rounded-full border-2 border-[#EEA849] text-white text-center font-bold text-m leading-[0]"
    />
  );
});

const styles = StyleSheet.create({
  container: {},
});

export default OTPField;
