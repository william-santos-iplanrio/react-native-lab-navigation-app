import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import HomeScreen from '../screens/home';
import OrderScreen from '../screens/order';

const storeStackNavigator = StackNavigator({
  Store: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({ 
      title: 'Store',
      headerLeft: (
        <Icon name='ios-menu' type='ionicon' onPress={() => navigation.navigate('DrawerOpen')} />
      ),        
      headerRight: <Icon name='ios-pricetags' type='ionicon' />
    })
  },
  Order: {
    screen: OrderScreen,
    navigationOptions: { title: 'Order' }
  }
});

export { storeStackNavigator };
