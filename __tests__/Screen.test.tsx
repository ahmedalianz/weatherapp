// __tests__/Screen.test.tsx
import React from 'react';
import {render} from '@testing-library/react-native';
import {Screen} from '../app/components';
import {Text} from 'react-native';

describe('Screen', () => {
  it('renders children correctly', () => {
    const {getByText} = render(
      <Screen title="Test Title">
        <Text>Child Component</Text>
      </Screen>,
    );
    expect(getByText('Child Component')).toBeTruthy();
  });

  it('renders AppBar with correct title', () => {
    const {getByText} = render(<Screen title="Test Title" />);
    expect(getByText('Test Title')).toBeTruthy();
  });

  it('applies bottom safe area when hasBottomSafeArea is true', () => {
    const {getByTestId} = render(
      <Screen title="Test Title" hasBottomSafeArea />,
    );
    expect(getByTestId('bottom-safe-area')).toBeTruthy();
  });
});
