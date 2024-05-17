import {Dimensions} from 'react-native';

const scaleSize = (dimension: number, scaleFactor = 1) => {
  const {width} = Dimensions.get('window');
  return dimension * (width / 350) * scaleFactor;
};

export default scaleSize;
