import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {icons, theme} from '../constants';
import {CityLabelProps} from '../types';
import {scaleSize} from '../utils';
import AppText from './AppText';
import Icon from './Icon';

const CityLabel: FC<CityLabelProps> = ({
  city,
  handleSelectCity,
  onHistorical,
}) => {
  return (
    <View style={styles.cityItem}>
      <TouchableOpacity
        style={styles.location}
        onPress={() => handleSelectCity && handleSelectCity(city)}>
        <Icon source={icons.location} color={theme.colors.primary} size={24} />
        <AppText bold style={styles.text}>
          {city?.name}, {city?.sys?.country}
        </AppText>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onHistorical && onHistorical(city)}>
        <Icon source={icons.info} color={theme.colors.primary} size={24} />
      </TouchableOpacity>
    </View>
  );
};
export default CityLabel;
const styles = StyleSheet.create({
  cityItem: {
    paddingVertical: scaleSize(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  location: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: scaleSize(32),
  },
  text: {
    color: theme.colors.black,
    fontWeight: '900',
    fontSize: scaleSize(14),
  },
});
