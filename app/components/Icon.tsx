import React, {FC} from 'react';
import {Image} from 'react-native';
import {IconProps} from '../types';
import {scaleSize} from '../utils';

const Icon: FC<IconProps> = ({
  width = 20,
  height = 20,
  source,
  color = '#FFF',
}) => {
  return (
    <Image
      source={source}
      style={{
        width: scaleSize(width),
        height: scaleSize(height),
        tintColor: color,
      }}
    />
  );
};
export default Icon;
