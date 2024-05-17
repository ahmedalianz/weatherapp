import {ViewProps} from 'react-native';

interface ScreenProps extends ViewProps {
  hasBottomSafeArea?: boolean;
  hasBack?: boolean;
  title: string;
}
export default ScreenProps;
