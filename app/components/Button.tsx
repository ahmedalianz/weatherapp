import React, {FC} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {ButtonProps} from '../types';
import Icon from './Icon';

const Button: FC<ButtonProps> = ({
  onPress,
  title,
  containerStyle,
  textStyle,
  icon,
}) => {
  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      {icon && <Icon source={icon} width={16} height={16} />}
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};
export default Button;
