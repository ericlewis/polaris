import React, { useContext, useMemo } from 'react';
import { View, StyleSheet, Text, Switch } from 'react-native';
import { UIContext } from '../../../store';

export default function Header() {
  const [state, reducers] = useContext(UIContext);
  const { theme, textColor, bgColor } = state;
  const { toggleTheme } = reducers;

  const themeStyles = useMemo(() => {
    return {
      header: {
        backgroundColor: bgColor
      },
      themeTextColor: {
        color: textColor
      }
    };
  }, [theme]);

  return (
    <View style={[styles.header, themeStyles.header]}>
      <View style={styles.left}>
        <Text style={themeStyles.themeTextColor}>Top Left</Text>
      </View>
      <View style={styles.center}>
        <Text style={themeStyles.themeTextColor}>Top Center</Text>
      </View>
      <View style={styles.right}>
        <Text style={[styles.themeText, themeStyles.themeTextColor]}>{theme}</Text>
        <Switch onValueChange={toggleTheme} value={theme === 'light' ? true : false} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  themeText: {
    paddingRight: 5,
    textTransform: 'capitalize'
  },
  header: {
    padding: 0,
    paddingTop: 30,
    height: 85,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#F7F7F7',
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
    position: 'relative'
  },
  center: {
    flex: 1,
    borderWidth: 0,
    borderColor: 'red',
    justifyContent: 'center',
    flexDirection: 'row',
    height: '100%',
    alignSelf: 'center'
  },
  left: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  right: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 20
  }
});