import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
export type Position = 'lefttop' | 'righttop' | 'leftbottom' | 'rightbottom';

interface Props {
  size: number;
  position: Position;
}

const CircleUI: FC<Props> = ({size, position}) => {
  let positionString = '';
  switch (position) {
    case 'lefttop':
      positionString = '-top-24 -left-24';
      break;
    case 'righttop':
      positionString = '-top-24 -right-24';
      break;
    case 'leftbottom':
      positionString = '-bottom-24 -left-24';
      break;
    case 'rightbottom':
      positionString = '-bottom-24 -right-24';
      break;
  }
  return (
    <View className={`w-[${size}] h-[${size}] absolute ${positionString}`}>
      <View
        className={`w-${size} h-${size} rounded-full opacity-20 bg-[#EEA849]`}
      />
      <View
        className={`w-[${size / 2}] h-[${
          size / 2
        }] rounded-full bg-[#EEA849] translate-x-8 translate-y-8 absolute opacity-30`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CircleUI;
