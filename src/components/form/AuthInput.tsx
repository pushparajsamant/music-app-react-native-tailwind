import COLORS from '@utils/colors';
import React, {FC, useEffect, useState} from 'react';
import {
  KeyboardType,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import AppInput from '@ui/AppInput';
import {useFormikContext} from 'formik';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';
interface Props {
  name: string;
  label?: string;
  value?: string;
  error?: string;
  placeholder?: string;
  isPassword?: boolean;
  keyboardType?: KeyboardType;
  autoCapitalize?: TextInputProps['autoCapitalize'];
  containerClassName?: string;
  rightIcon?: string;
  onRightIconPress?: Function;
}

const AuthInput: FC<Props> = ({
  name,
  label,
  value,
  rightIcon,
  placeholder,
  keyboardType,
  isPassword,
  autoCapitalize,
  containerClassName,
  onRightIconPress,
}) => {
  const {values, handleChange, errors, touched, handleBlur} = useFormikContext<{
    [key: string]: string;
  }>();
  const inputTransformValue = useSharedValue(0);
  const shakeAnimation = () => {
    inputTransformValue.value = withSequence(
      withTiming(-10, {duration: 50}),
      withSpring(0, {
        damping: 8,
        mass: 0.5,
        stiffness: 1000,
        restDisplacementThreshold: 0.1,
      }),
    );
  };
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: inputTransformValue.value}],
    };
  });
  const errorMsg = touched[name] && errors[name] ? errors[name] : '';
  useEffect(() => {
    if (errorMsg) {
      shakeAnimation();
    }
  }, [errorMsg]);

  return (
    <Animated.View style={animatedStyle} className={containerClassName}>
      <View className="flex-row justify-between items-center">
        <Text className="text-white text-base">{label}</Text>
        <Text className="text-[#FF5B14]">{errorMsg}</Text>
      </View>
      <View className="border-[#EEA849] border-2 rounded-full justify-between items-center flex-row mt-3 px-2">
        <AppInput
          value={values[name]}
          secureTextEntry={isPassword}
          onChangeText={handleChange(name)}
          placeholderTextColor={COLORS.INACTIVE_CONTRAST}
          keyboardType={keyboardType}
          className=" text-white"
          autoCapitalize={autoCapitalize}
          onBlur={handleBlur(name)}
          placeholder={placeholder}></AppInput>
        {rightIcon && (
          <Pressable onPress={() => onRightIconPress && onRightIconPress()}>
            <Icon name={rightIcon} size={20} color={'#FFF'} />
          </Pressable>
        )}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AuthInput;
