// __tests__/AppBar.test.tsx
import React from 'react';
import {render} from '@testing-library/react-native';
import {AppBar} from '../app/components';

describe('AppBar', () => {
  it('renders correctly with title', () => {
    const {getByText} = render(<AppBar title="Test Title" hasBack={false} />);
    expect(getByText('Test Title')).toBeTruthy();
  });

  it('renders back button if hasBack is true', () => {
    const {getByTestId} = render(<AppBar title="Test Title" hasBack />);
    expect(getByTestId('back-button')).toBeTruthy();
  });
});
