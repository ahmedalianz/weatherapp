import React, {FC, useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import {CityWeatherModalProps} from '../types';

const CityWeatherModal: FC<CityWeatherModalProps> = ({
  onClose,
  onAdd,
  city = '',
}) => {
  const [cityName, setCityName] = useState('');

  const handleAddCity = () => {
    onAdd && onAdd(cityName);
    setCityName('');
  };

  return (
    <View>
      <TextInput
        placeholder="Enter city name"
        value={cityName}
        onChangeText={setCityName}
      />
      <Button title="Add City" onPress={handleAddCity} />
      <Button title="Close" onPress={onClose} />
    </View>
  );
};

export default CityWeatherModal;
