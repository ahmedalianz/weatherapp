import {GestureResponderEvent, TextStyle, ViewStyle} from 'react-native';

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  icon?: _SourceUri;
}
export default ButtonProps;
