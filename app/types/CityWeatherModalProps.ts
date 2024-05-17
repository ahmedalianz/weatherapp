import ICity from './ICity';

interface CityWeatherModalProps {
  city?: ICity;
  onDismiss: () => void;
}
export default CityWeatherModalProps;
