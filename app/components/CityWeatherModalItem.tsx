import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {theme} from '../constants';
import {scaleSize} from '../utils';
import AppText from './AppText';
import {CityWeatherModalItemProps} from '../types';

const CityWeatherModalItem: FC<CityWeatherModalItemProps> = ({
  label,
  value,
  temperature,
}) => {
  return (
    <View style={styles.contentItem}>
      <AppText bold>{label}</AppText>
      <AppText style={styles.contentItemValue}>
        {value}
        {temperature && (
          <AppText style={styles.contentItemValue}>&#176;C</AppText>
        )}
      </AppText>
    </View>
  );
};
const styles = StyleSheet.create({
  contentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentItemValue: {
    textTransform: 'capitalize',
    color: theme.colors.primary,
    fontSize: scaleSize(20),
  },
});
export default CityWeatherModalItem;
