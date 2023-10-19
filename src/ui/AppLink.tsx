import React, {FC} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

interface Props {
  title: string;
}

const AppLink: FC<Props> = ({title}) => {
  return (
    <Pressable>
      <Text className="text-[#EEA849]">{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AppLink;
