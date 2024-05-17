import React, {FC} from 'react';
import {StyleSheet, Text} from 'react-native';
import {AppTextProps} from '../types';
import {theme} from '../constants';
import {scaleSize} from '../utils';

const AppText: FC<AppTextProps> = ({
  children,
  bold,
  center,
  right,
  style,
  ...props
}) => {
  return (
    <Text
      {...props}
      style={[
        styles.text,
        style,
        {fontFamily: bold ? 'Lato-Black' : 'Lato-Regular'},
        {fontWeight: bold ? '900' : '400'},
        {textAlign: center ? 'center' : right ? 'right' : 'left'},
      ]}>
      {children}
    </Text>
  );
};
export default AppText;
const styles = StyleSheet.create({
  text: {
    color: theme.colors.black,
    fontSize: scaleSize(14),
  },
});
