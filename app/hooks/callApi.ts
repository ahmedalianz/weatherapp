import {useEffect, useState} from 'react';
import {API_KEY} from '../constants';
import {HttpClient} from '../utils';
import {ICity} from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {_retrieveData, _storeData} from '../utils/storage';

export default function useCallApi({cityName}: {cityName: string}) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setErrors] = useState('');
  const [data, setData] = useState<ICity>();

  const callApi = async () => {
    if (!cityName) {
      return;
    }
    try {
      console.log('call');
      setLoading(true);
      const result = await HttpClient<ICity>(
        `/data/2.5/weather?q=${cityName}&appid=${API_KEY}`,
      );
      setData(result?.data);
      const oldData = await _retrieveData('weatherData');
      if (oldData) {
        _storeData(
          'weatherData',
          JSON.stringify([
            ...JSON.parse(oldData),
            {...result?.data, time: new Date()},
          ]),
        );
      } else {
        _storeData(
          'weatherData',
          JSON.stringify([{...result?.data, time: new Date()}]),
        );
      }

      setLoading(false);
      setErrors('');
    } catch (error) {
      console.log('Error Fetching Weather ====>', error);
      setErrors(
        "Can't Get Weather / Maybe Trying Another City Name Would Resolve This ====>" +
          JSON.stringify(error.message),
      );
    }
  };
  useEffect(() => {
    callApi();
  }, [cityName]);
  return {
    loading,
    error,
    data,
  };
}
