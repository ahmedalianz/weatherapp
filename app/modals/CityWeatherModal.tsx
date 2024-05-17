import React, {FC} from 'react';
import {Image, StyleSheet, Pressable, View} from 'react-native';
import AppText from '../components/AppText';
import {CityWeatherModalProps} from '../types';
import {scaleSize} from '../utils';
import {IMG_BASE_URL, theme} from '../constants';
import {CityWeatherModalItem} from '../components';

const CityWeatherModal: FC<CityWeatherModalProps> = ({city, onDismiss}) => {
  return (
    <Pressable style={styles.centeredView} onPress={onDismiss}>
      <View style={styles.modalView}>
        <AppText center style={styles.modalTitle}>
          {city?.name || ''}, {city?.sys?.country}
        </AppText>
        <Image
          source={{
            uri: `${IMG_BASE_URL}/${city?.weather?.[0]?.icon}.png`,
          }}
          resizeMode="contain"
          style={styles.modalImage}
        />
        <View style={styles.content}>
          <CityWeatherModalItem
            label="Description"
            value={city?.weather?.[0]?.description || ''}
          />
          <CityWeatherModalItem
            label="Temperature"
            temperature
            value={city?.main?.temp ? (city.main.temp - 273.15).toFixed(2) : ''}
          />
          <CityWeatherModalItem
            label="Humidity"
            value={city?.main?.humidity ? city.main.humidity + ' %' : ''}
          />
          <CityWeatherModalItem
            label="Wind speed"
            value={city?.wind?.speed ? city.wind.speed + ' km/h' : ''}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default CityWeatherModal;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.backdrop,
  },
  modalView: {
    backgroundColor: 'white',
    width: scaleSize(296),
    height: scaleSize(423),
    borderRadius: 10,
    padding: scaleSize(32),
    elevation: 5,
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  modalTitle: {
    fontSize: scaleSize(24),
    marginBottom: scaleSize(68),
    textTransform: 'capitalize',
  },
  modalImage: {
    width: scaleSize(94),
    height: scaleSize(77),
    alignSelf: 'center',
    marginBottom: scaleSize(76),
  },
  content: {gap: scaleSize(7)},
});
