import dayjs from 'dayjs';
import React, {FC} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {IMG_BASE_URL} from '../constants';
import {CityHistoricalItemProps} from '../types';
import {scaleSize} from '../utils';
import AppText from './AppText';

const CityHistoricalItem: FC<CityHistoricalItemProps> = ({
  date,
  state,
  degree,
  icon,
}) => {
  console.log(icon);
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `${IMG_BASE_URL}/${icon}.png`,
        }}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <AppText style={styles.dateText}>
          {date ? dayjs(date).format('DD.MM.YYYY - hh:mm') : ''}
        </AppText>
        <AppText bold style={styles.text}>
          {state}, {degree}&#176;C
        </AppText>
      </View>
    </View>
  );
};
export default CityHistoricalItem;
const styles = StyleSheet.create({
  container: {
    padding: scaleSize(16),
    flexDirection: 'row',
    gap: scaleSize(21),
    alignItems: 'center',
  },
  textContainer: {
    gap: scaleSize(1),
  },
  text: {textTransform: 'capitalize'},
  dateText: {
    fontSize: scaleSize(12),
  },
  image: {
    width: scaleSize(30),
    height: scaleSize(24),
  },
});
