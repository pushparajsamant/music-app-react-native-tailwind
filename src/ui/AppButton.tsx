import React, {FC} from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';

interface Props {
  title: string;
  onPress?(): void;
}

const AppButton: FC<Props> = ({title, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      className="w-full h-11 bg-[#EEA849] justify-center items-center rounded-full">
      <Text className="text-white text-lg">{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AppButton;
