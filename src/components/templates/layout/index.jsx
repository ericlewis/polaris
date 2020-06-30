import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, Platform, Dimensions, Animated } from 'react-native';
import SideMenu from 'react-native-side-menu';
import Header from '../../organisms/header';
import TabBar from '../../organisms/tab-bar';

const LayoutBase = props => {
  const { children, toggleSidebar } = props;

  return (
    <View
      style={{
        flex: 1,
        overflow: 'hidden',
        width: '100%',
        height: '100%'
      }}
    >
      <SideMenu menuPosition="left">
        <View style={[styles.layout, styles.tabBarSpacing]}>
          {Platform.OS === 'web' ? <Header /> : <StatusBar hidden={true} style="auto" />}
          {children}
        </View>
        {Platform.OS !== 'web' && <TabBar />}
      </SideMenu>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#fff'
  },
  tabBarSpacing: {
    paddingBottom: 0
  },
  navBarStyle: {
    backgroundColor: '#fff'
  },
  cardStyle: {
    backgroundColor: '#fff'
  }
});

export default LayoutBase;
