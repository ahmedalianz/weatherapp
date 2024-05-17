import {useEffect, useState} from 'react';
import {API_KEY} from '../constants';
import {ICity} from '../types';
import {HttpClient} from '../utils';
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
      setLoading(true);
      const result = await HttpClient<ICity>(
        `/data/2.5/weather?q=${cityName}&appid=${API_KEY}`,
      );
      const city = {...result?.data, time: new Date().toDateString()};
      setData(city);
      const oldData = await _retrieveData('weatherData');
      if (oldData) {
        _storeData(
          'weatherData',
          JSON.stringify([...JSON.parse(oldData), city]),
        );
      } else {
        _storeData('weatherData', JSON.stringify([city]));
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
