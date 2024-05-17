import React, {FC} from 'react';
import {Image} from 'react-native';
import {IconProps} from '../types';
import {scaleSize} from '../utils';

const Icon: FC<IconProps> = ({size = 20, source, color = '#FFF'}) => {
  return (
    <Image
      source={source}
      resizeMode="contain"
      style={{
        width: scaleSize(size),
        height: scaleSize(size),
        tintColor: color,
      }}
    />
  );
};
export default Icon;
