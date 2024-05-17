import {RouteProp} from '@react-navigation/native';
import React, {FC} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {CityWeatherModalItem, Screen} from '../components';
import AppText from '../components/AppText';
import {IMG_BASE_URL, theme} from '../constants';
import {RootStackParamList} from '../types';
import {scaleSize} from '../utils';
import dayjs from 'dayjs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type CityDetailsScreenRouteProp = RouteProp<RootStackParamList, 'CityDetails'>;

interface CityDetailsScreenProps {
  route: CityDetailsScreenRouteProp;
}

const CityDetailsScreen: FC<CityDetailsScreenProps> = ({route}) => {
  const {city} = route.params;
  const {bottom} = useSafeAreaInsets();
  return (
    <Screen title={''} hasBack>
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
      <View style={[styles.bottomView, {marginBottom: scaleSize(20) + bottom}]}>
        <AppText center style={styles.bottomViewText}>
          Weather information for {city?.name} received on
        </AppText>
        <AppText center style={styles.bottomViewText}>
          {city?.time ? dayjs(city?.time).format('DD.MM.YYYY - hh:mm') : ''}
        </AppText>
      </View>
    </Screen>
  );
};

export default CityDetailsScreen;
const styles = StyleSheet.create({
  modalView: {
    alignSelf: 'center',
    backgroundColor: 'white',
    width: scaleSize(296),
    height: scaleSize(423),
    borderRadius: scaleSize(10),
    bottom: scaleSize(45),
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
  bottomView: {marginTop: 'auto'},
  bottomViewText: {fontSize: scaleSize(12), color: theme.colors.text},
});
