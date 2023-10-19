import CircleUI from '@ui/CircleUI';
import {t} from 'i18next';
import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IMAGENAME} from '../assets/images';
import Header from '@ui/Header';

interface Props {
  heading: string;
  subHeading?: string;
  children: React.ReactNode;
}

const AuthFormContainer: FC<Props> = ({heading, subHeading, children}) => {
  return (
    <View className="w-full px-3">
      <CircleUI size={52} position="lefttop" />
      <CircleUI size={100} position="righttop" />
      <CircleUI size={100} position="leftbottom" />
      <CircleUI size={100} position="rightbottom" />
      {/* Here we are passing the type which will be used to validate the initialValues and also provide intellisense on the values returned by onSubmit */}
      <View className="">
        <Image source={IMAGENAME} />
        <Header title={heading} />
        <Text className="text-white">{subHeading}</Text>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AuthFormContainer;
