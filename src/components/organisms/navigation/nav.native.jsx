import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Nav = () => {
  return (
    <View style={styles.view}>
      <View style={styles.item}>
        <Text>View One</Text>
      </View>
      <View style={styles.item}>
        <Text>View Two</Text>
      </View>
      <View style={styles.item}>
        <Text>View Three</Text>
      </View>
    </View>
  );
};

export default Nav;

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    zIndex: 1,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 2,
    shadowOpacity: 1
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 30
  }
});