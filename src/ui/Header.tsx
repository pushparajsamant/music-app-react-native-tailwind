import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  title: string;
}

const Header: FC<Props> = ({title}) => {
  return <Text className="text-[#EEA849] text-2xl font-bold">{title}</Text>;
};

const styles = StyleSheet.create({
  container: {},
});

export default Header;
