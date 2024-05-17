import React, {FC, Suspense} from 'react';
import {ActivityIndicator, ImageBackground, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {icons} from '../constants';
import {ScreenProps} from '../types';
import AppBar from './AppBar';

const Screen: FC<ScreenProps> = ({
  children,
  title,
  hasBack,
  hasBottomSafeArea,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <Suspense fallback={<ActivityIndicator />}>
      <ImageBackground
        resizeMode="contain"
        style={{flex: 1}}
        source={icons.pattern}>
        <AppBar title={title} hasBack={hasBack} />

        {children}
        {hasBottomSafeArea && <View style={{height: insets.bottom}} />}
      </ImageBackground>
    </Suspense>
  );
};

export default Screen;
