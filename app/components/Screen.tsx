import React, {FC, Suspense} from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  View,
  StyleSheet,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {icons, theme} from '../constants';
import {ScreenProps} from '../types';
import AppBar from './AppBar';
import {scaleSize} from '../utils';
import LinearGradient from 'react-native-linear-gradient';

const Screen: FC<ScreenProps> = ({
  children,
  title,
  hasBack,
  hasBottomSafeArea,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <Suspense fallback={<ActivityIndicator />}>
      <LinearGradient
        colors={[theme.colors.screen, theme.colors.white]}
        style={styles.gradient}>
        <View style={styles.container}>
          <AppBar title={title} hasBack={hasBack} />
          {children}
          {hasBottomSafeArea && <View style={{height: insets.bottom}} />}
          <ImageBackground
            style={styles.imageBackground}
            imageStyle={styles.image}
            source={icons.pattern}
          />
        </View>
      </LinearGradient>
    </Suspense>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  gradient: {
    flex: 1,
  },
  imageBackground: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: scaleSize(200),
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
