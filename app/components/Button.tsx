import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import {ButtonProps} from '../types';
import AppText from './AppText';
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
      {icon && <Icon source={icon} size={16} />}
      <AppText bold style={textStyle}>
        {title}
      </AppText>
    </TouchableOpacity>
  );
};
export default Button;
