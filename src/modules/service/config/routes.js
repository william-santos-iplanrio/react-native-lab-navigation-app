import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import HomeScreen from '../screens/home';
import RequestScreen from '../screens/request';

const serviceStackNavigator = StackNavigator({
  Service: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({ 
      title: 'Service',
      headerLeft: (
        <Icon name='ios-menu' type='ionicon' onPress={() => navigation.navigate('DrawerOpen')} />
      ),    
      headerRight: <Icon name='ios-list-box' type='ionicon' />
    })
  },
  Request: {
    screen: RequestScreen,
    navigationOptions: { 
      title: 'Request'    
    }
  }
});

export { serviceStackNavigator };
