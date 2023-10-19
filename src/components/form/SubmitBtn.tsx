import AppButton from '@ui/AppButton';
import {useFormikContext} from 'formik';
import React, {FC} from 'react';
import {Button} from 'react-native';

interface Props {
  title: string;
}

const SubmitBtn: FC<Props> = ({title}) => {
  const {handleSubmit} = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit}></AppButton>;
};

export default SubmitBtn;
