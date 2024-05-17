import ICity from './ICity';

type RootStackParamList = {
  CityList: undefined;
  CityDetails: {city: ICity};
  CityHistorical: {city: ICity};
};
export default RootStackParamList;
