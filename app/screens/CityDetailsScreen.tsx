import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import axios from 'axios';

const API_KEY = 'YOUR_API_KEY';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const CityDetailsScreen = ({route}) => {
  const {cityName} = route.params;
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `${API_URL}?q=${cityName}&appid=${API_KEY}`,
        );
        setWeather(response.data);
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    };

    fetchWeather();
  }, [cityName]);

  return (
    <View>
      {weather && (
        <View>
          <Text>{cityName}</Text>
          <Text>{weather.weather[0].description}</Text>
          <Image
            source={{
              uri: `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`,
            }}
            style={{width: 50, height: 50}}
          />
          <Text>{new Date().toLocaleDateString()}</Text>
        </View>
      )}
    </View>
  );
};

export default CityDetailsScreen;
