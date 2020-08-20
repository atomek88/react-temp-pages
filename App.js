/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { DrawerItems, createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Icon } from 'native-base';
import HomePage from './component/pages/HomePage';
import SettingsPage from './component/pages/SettingsPage';
import NotificationsPage from './component/pages/NotificationsPage';
import ProfilePage from './component/pages/ProfilePage';

const { width } = Dimensions.get("window");

// remove below?
const CustomDrawerNavigation = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ height: 250, backgroundColor: '#d2d2d2', opacity: 0.9 }}>
        <View style={{ height: 200, backgroundColor: 'Green', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('./assets/hbicon.png')} style={{ height: 150, width: 150, borderRadius: 60 }} />
        </View>
        <View style={{ height: 50, backgroundColor: 'Blue', alignItems: 'center', justifyContent: 'center' }}>
          <Text>John Doe</Text>
        </View>
      </View>
      <ScrollView>
        <DrawerItems {...props} />
      </ScrollView>
      <View style={{ alignItems: "center", bottom: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'column', marginRight: 15 }}>
            <Icon name="flask" style={{ fontSize: 24 }} onPress={() => console.log("tom")} />
          </View>
          <View style={{ flexDirection: 'column' }}>
            <Icon name="call" style={{ fontSize: 24 }} onPress={() => console.log("tommy")} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

// navigation drawer
const Drawer = createDrawerNavigator({
    Home: {
        screen: HomePage,
        navigationOptions: {
            title: 'Home Page'
            }
         },
    Settings: {
         screen: SettingsPage,
         navigationOptions: {
             title: 'Settings'
             }
          },
    Notifications: {
          screen: NotificationsPage,
          navigationOptions: {
              title: 'Notifications'
              }
           },
    Profile: {
           screen: ProfilePage,
           navigationOptions: {
               title: 'Profile'
               }
            }
    },
      {
        drawerPosition: 'left',
        contentComponent: CustomDrawerNavigation,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
        drawerWidth: (width / 3) * 2
      });

const App = createAppContainer(Drawer);
/*
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
*/
export default App;
