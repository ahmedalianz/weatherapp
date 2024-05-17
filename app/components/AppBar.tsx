import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {theme} from '../constants';
import {AppBarProps} from '../types';
import {scaleSize} from '../utils';

const AppBar: FC<AppBarProps> = ({title}) => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={[styles.container, {paddingTop: top}]}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: scaleSize(150),
    backgroundColor: theme?.colors?.primary,
  },
  text: {
    fontSize: scaleSize(24),
    fontWeight: '400',
    marginTop: 'auto',
    marginBottom: scaleSize(22),
    marginStart: scaleSize(72),
    color: theme?.colors?.white,
  },
});
export default AppBar;
