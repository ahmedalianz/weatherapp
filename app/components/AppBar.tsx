import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {icons, theme} from '../constants';
import {AppBarProps} from '../types';
import {scaleSize} from '../utils';
import AppText from './AppText';
import Icon from './Icon';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const AppBar: FC<AppBarProps> = ({title, hasBack}) => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View style={[styles.container, {paddingTop: top}]}>
      {hasBack && (
        <TouchableOpacity onPress={navigation.goBack}>
          <Icon source={icons.arrowBack} size={48} />
        </TouchableOpacity>
      )}
      <AppText style={styles.text}>{title}</AppText>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: scaleSize(150),
    backgroundColor: theme.colors.primary,
  },
  text: {
    fontSize: scaleSize(24),
    fontWeight: '400',
    marginTop: 'auto',
    marginBottom: scaleSize(22),
    marginStart: scaleSize(72),
    color: theme.colors.white,
  },
});
export default AppBar;
