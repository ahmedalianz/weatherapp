import ICity from './ICity';

interface CityLabelProps {
  city: ICity;
  handleSelectCity?: (city: ICity) => void;
  onHistorical?: (city: ICity) => void;
}
export default CityLabelProps;
