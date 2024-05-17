import React, {FC, useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {CityHistoricalItem, Screen} from '../components';
import AppText from '../components/AppText';
import {theme} from '../constants';
import {scaleSize} from '../utils';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../types';
import {_retrieveData} from '../utils/storage';
import {ICity} from '../types';

type CityHistoricalScreenRouteProp = RouteProp<
  RootStackParamList,
  'CityHistorical'
>;

interface CityHistoricalScreenProps {
  route: CityHistoricalScreenRouteProp;
}

const CityHistoricalScreen: FC<CityHistoricalScreenProps> = ({route}) => {
  const {city} = route.params;

  const [weatherHistorical, setWeatherHistorical] = useState([]);
  const getData = async () => {
    const oldData = await _retrieveData('weatherData');
    if (oldData) {
      const filteredData = JSON.parse(oldData).filter(
        (oldCityData: ICity) => oldCityData.id === city.id,
      );
      setWeatherHistorical(filteredData);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Screen title={`${city?.name} Historical`} hasBack>
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={weatherHistorical}
          renderItem={({item}: {item: ICity}) => (
            <CityHistoricalItem
              degree={item?.main?.temp}
              date={item?.time}
              state={item.weather?.[0]?.description}
              icon={item.weather?.[0]?.icon}
            />
          )}
          keyExtractor={(_, index) => String(index)}
          ListEmptyComponent={<AppText center>Nothing to See here yet</AppText>}
        />
      </View>
    </Screen>
  );
};

export default CityHistoricalScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scaleSize(16),
    backgroundColor: theme.colors.white,
  },
});
