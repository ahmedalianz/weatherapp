import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {scaleSize} from '../utils';
import Icon from './Icon';
import {icons, theme} from '../constants';

export default function CityLabel({city}) {
  return (
    <TouchableOpacity
      key={city}
      //   onPress={() => handleCityClick(city)}
      style={styles.cityItem}>
      <View style={styles.location}>
        <Icon
          source={icons.location}
          color={theme?.colors?.primary}
          width={24}
          height={24}
        />
        <Text>{city.name}</Text>
      </View>
      <Icon
        source={icons.info}
        color={theme?.colors?.primary}
        width={24}
        height={24}
      />
    </TouchableOpacity>
  );
}
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
});
