import {BottomSheetTextInput, BottomSheetView} from '@gorhom/bottom-sheet';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {debounce} from 'lodash';
import React, {FC, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {CityLabel, Icon} from '../components';
import AppText from '../components/AppText';
import {icons, theme} from '../constants';
import {useCallApi} from '../hooks';
import {addCity} from '../store/citiesSlice';
import {ICity} from '../types';
import {scaleSize} from '../utils';

const AddCity: FC<{bottomSheetRef: React.RefObject<BottomSheetMethods>}> = ({
  bottomSheetRef,
}) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const fetchWeather = debounce((cityName: string) => {
    setSearchQuery(cityName);
  }, 1000);
  const {data: city, error, loading} = useCallApi({cityName: searchQuery});
  const includeCity = (selectedCity: ICity) => {
    dispatch(addCity(selectedCity));
    bottomSheetRef.current?.close();
  };
  return (
    <BottomSheetView>
      <BottomSheetView style={styles.searchContainer}>
        <Icon source={icons.search} color={theme.colors.primary} />
        <BottomSheetTextInput
          placeholder="Search For cities"
          placeholderTextColor={theme.colors.black}
          style={styles.input}
          onChangeText={text => {
            setSearch(text);
            fetchWeather(text);
          }}
          value={search}
        />
      </BottomSheetView>

      {error ? (
        <View style={styles.errorContainer}>
          <Icon source={icons.info} color={theme.colors.red} size={70} />
          <AppText center style={styles.errorText}>
            {error || 'Something went wrong'}
          </AppText>
        </View>
      ) : (
        <>
          {loading ? (
            <ActivityIndicator />
          ) : city ? (
            <View style={{paddingHorizontal: scaleSize(16)}}>
              <CityLabel city={city} handleSelectCity={includeCity} />
            </View>
          ) : null}
        </>
      )}
    </BottomSheetView>
  );
};
export default AddCity;
const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: scaleSize(16),
    gap: scaleSize(8),
    borderBottomWidth: scaleSize(1),
    borderBottomColor: theme.colors.divider,
    marginBottom: scaleSize(8),
  },
  input: {
    fontSize: scaleSize(14),
    fontWeight: '900',
    fontFamily: 'Lato-Black',
    flex: 1,
    height: scaleSize(32),
  },
  errorContainer: {alignItems: 'center', gap: scaleSize(16)},
  errorText: {color: theme.colors.red},
});
