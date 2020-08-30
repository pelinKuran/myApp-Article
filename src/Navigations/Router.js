import React from 'react';
import {Text, View} from 'react-native';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

// screens
import HomePage from '../Screens/HomeScreen/HomePage';
import DiscoverP from '../Screens/Discover/DiscoverP';

import Profile from '../Screens/profileDash/Profile';
import Icon from 'react-native-vector-icons/Ionicons';
import scrollDeneme from '../Screens/Article/scrollDeneme';
const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name="home-sharp" size={22} color={tintColor} />
      ),
    },
  },
  Discover: {
    screen: DiscoverP,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name="airplane-sharp" size={22} color={tintColor} />
      ),
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name="person-sharp" size={22} color={tintColor} />
      ),

    },
  },
});

const MainNavigator = createStackNavigator(
  {
    tabs: TabNavigator,
    Article: scrollDeneme,
  },
  {
    initialRouteName: 'tabs',
  },
);


export default createAppContainer(MainNavigator);
