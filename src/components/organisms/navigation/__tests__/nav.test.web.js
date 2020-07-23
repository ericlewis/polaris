import React from 'react';
import { View, Text } from 'react-native';
import { fireEvent, cleanup, renderAsRoute } from 'utils/test-utils';
import Header from '../nav';
import { useTheme } from 'emotion-theming';

afterEach(cleanup);

const ThemeSwitchFixture = () => {
  const theme = useTheme();
  return (
    <View>
      <Header />
      <Text>Theme: {theme.name}</Text>
    </View>
  );
};

describe('Navigation Header Web', () => {
  it('should change theme correctly on press', () => {
    const { getByTestId, queryAllByText } = renderAsRoute(ThemeSwitchFixture);

    expect(queryAllByText('Theme: light')).toHaveLength(1);
    expect(queryAllByText('Theme: dark')).toHaveLength(0);

    const themeSwitch = getByTestId('theme-switch');
    fireEvent(themeSwitch, 'valueChange');

    expect(queryAllByText('Theme: light')).toHaveLength(0);
    expect(queryAllByText('Theme: dark')).toHaveLength(1);
  });
});
