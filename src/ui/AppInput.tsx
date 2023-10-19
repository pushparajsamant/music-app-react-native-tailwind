import React, {FC, useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
interface Props extends TextInputProps {}

const AppInput: FC<Props> = props => {
  return (
    <TextInput
      {...props}
      style={[
        props.style,
        {
          height: 40,
          paddingHorizontal: 20,
        },
      ]}></TextInput>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AppInput;
