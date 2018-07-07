import React from 'react';

import Menu from './routes/Menu';
import Appetizers from './routes/Appetizers';
import Burgers from './routes/Burgers';
import Spagety from './routes/Spagety';
import Spagety1 from './routes/Spagety1';
import Spagety2 from './routes/Spagety2';

import { StackNavigator } from 'react-navigation';

const routeConfig = {
  Menu: { screen: Menu },
  Appetizers: { screen: Appetizers },
  Burgers: { screen: Burgers },
  Spagety: { screen: Spagety },
  Spagety1: { screen: Spagety1 },
  Spagety2: { screen: Spagety2 },
}

const StackNavigatorConfig = {
  navigationOptions: {
    headerBackTitleStyle: {
      color: 'red',
    },
    headerTintColor: 'red'
  }
}

export default Home = StackNavigator(routeConfig, StackNavigatorConfig);