import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {CityWeatherModal} from '../modals';
import {AppBar, Button, CityLabel} from '../components';
import {icons, theme} from '../constants';
import {scaleSize} from '../utils';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

const CityListScreen = () => {
  const {bottom} = useSafeAreaInsets();

  const [cities, setCities] = useState([
    {id: 1, name: 'asddas'},
    {id: 2, name: 'asddas'},
    {id: 3, name: 'asddas'},
    {id: 4, name: 'asddas'},
    {id: 5, name: 'asddas'},
    {id: 6, name: 'asddas'},
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);

  const addCity = (cityName: any) => {
    setCities([...cities, cityName]);
    setModalVisible(false);
  };

  const handleCityClick = cityName => {
    setSelectedCity(cityName);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <AppBar title="Cities" />
      <View style={styles.container}>
        {cities.map(city => (
          <CityLabel key={city.id} city={city} />
        ))}

        {/* <Modal visible={modalVisible} animationType="slide">
          <CityWeatherModal
            onClose={() => setModalVisible(false)}
            onAdd={addCity}
          />
        </Modal>
        {selectedCity && (
          <Modal visible={!!selectedCity} animationType="slide">
            <CityWeatherModal
              city={selectedCity}
              onClose={() => setSelectedCity(null)}
            />
          </Modal>
        )} */}
      </View>
      <Button
        containerStyle={{...styles.addButton, bottom: scaleSize(16) + bottom}}
        onPress={() => setModalVisible(true)}
        textStyle={styles.addButtonText}
        title="Add City"
        icon={icons.plus}
      />
    </SafeAreaView>
  );
};

export default CityListScreen;
const styles = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: theme?.colors?.primary},
  container: {
    flex: 1,
    padding: scaleSize(16),
    backgroundColor: theme?.colors?.white,
  },

  addButton: {
    position: 'absolute',
    right: scaleSize(16),
    width: scaleSize(137),
    height: scaleSize(56),
    backgroundColor: theme?.colors?.primary,
    borderRadius: scaleSize(28),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: scaleSize(16),
  },
  addButtonText: {
    color: theme?.colors?.white,
    fontSize: scaleSize(14),
    fontWeight: '900',
  },
});
