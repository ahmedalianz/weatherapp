import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import {BottomSheetDefaultBackdropProps} from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useCallback, useMemo, useRef} from 'react';
import {Animated, FlatList, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {Button, CityLabel, Screen} from '../components';
import AppText from '../components/AppText';
import {SCREEN_HEIGHT, icons, theme} from '../constants';
import {AddCity} from '../modals';
import {RootState} from '../store';
import {ICity, RootStackParamList} from '../types';
import {scaleSize} from '../utils';
type CityListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CityList'
>;

interface CityListScreenProps {
  navigation: CityListScreenNavigationProp;
}

const CityListScreen: FC<CityListScreenProps> = ({navigation}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['1%', '56%'], []);
  const {bottom} = useSafeAreaInsets();
  const bottomButtonSafeArea = bottom + scaleSize(16);
  const buttonPosition = useRef(
    new Animated.Value(-bottomButtonSafeArea),
  ).current;
  const {cities} = useSelector((state: RootState) => state.citiesReducer);

  const handleSelectCity = (city: ICity) => {
    navigation.navigate('CityDetails', {city});
  };
  const onHistorical = (city: ICity) => {
    navigation.navigate('CityHistorical', {city});
  };
  const searchForCity = () => {
    bottomSheetRef.current?.expand();
    Animated.timing(buttonPosition, {
      toValue: SCREEN_HEIGHT,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };
  const renderBackdrop = useCallback(
    (
      props: React.JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps,
    ) => <BottomSheetBackdrop {...props} appearsOnIndex={1} />,
    [],
  );
  return (
    <Screen title="Cities">
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={cities}
          contentContainerStyle={styles.listSpace}
          renderItem={({item: city}) => (
            <CityLabel
              key={city.id}
              city={city}
              handleSelectCity={handleSelectCity}
              onHistorical={onHistorical}
            />
          )}
          keyExtractor={(item: ICity) => String(item.id)}
          ListEmptyComponent={
            <AppText center>Add City To Check weather Forecast</AppText>
          }
        />
      </View>

      <BottomSheet
        keyboardBlurBehavior="restore"
        index={-1}
        ref={bottomSheetRef}
        style={styles.sheetStyle}
        enablePanDownToClose
        backdropComponent={renderBackdrop}
        snapPoints={snapPoints}
        onClose={() =>
          Animated.timing(buttonPosition, {
            toValue: -bottomButtonSafeArea,
            duration: 200,
            useNativeDriver: true,
          }).start()
        }
        keyboardBehavior="fillParent">
        <AddCity bottomSheetRef={bottomSheetRef} />
      </BottomSheet>
      <Button
        containerStyle={{
          ...styles.addButton,
          transform: [{translateY: buttonPosition}],
        }}
        onPress={searchForCity}
        textStyle={styles.addButtonText}
        title="Add City"
        icon={icons.plus}
      />
    </Screen>
  );
};

export default CityListScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scaleSize(16),
  },

  addButton: {
    position: 'absolute',
    right: scaleSize(16),
    width: scaleSize(137),
    height: scaleSize(56),
    bottom: 0,
    backgroundColor: theme.colors.primary,
    borderRadius: scaleSize(28),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: scaleSize(16),
    zIndex: 1,
  },
  addButtonText: {
    color: theme.colors.white,
    fontSize: scaleSize(14),
    fontWeight: '900',
  },
  listSpace: {paddingBottom: scaleSize(40)},
  sheetStyle: {
    backgroundColor: theme.colors.white,
    elevation: 4,
    shadowColor: theme.colors.black,
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
});
