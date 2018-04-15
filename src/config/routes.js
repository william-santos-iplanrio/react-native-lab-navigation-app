import React from 'react';
import { ScrollView, View, Button, Dimensions } from 'react-native';
import {
  TabNavigator,
  StackNavigator,
  DrawerNavigator,
  DrawerItems,
  SafeAreaView
} from 'react-navigation';
import { Icon } from 'react-native-elements';

import WelcomeScreen from '../screens/welcome';
import ContactsScreen from '../screens/contacts';
import HomeScreen from '../screens/home';
import SearchScreen from '../screens/search';
import SettingsScreen from '../screens/settings';

import { authStackNavigator } from '../auth/config/routes';
import { storeStackNavigator } from '../modules/store/config/routes';
import { serviceStackNavigator } from '../modules/service/config/routes';

const contactsStackNavigator = StackNavigator({
  Contacts: {
    screen: ContactsScreen,
    navigationOptions: { 
      title: 'Contacts',
      headerRight: <Icon name='ios-contacts' type='ionicon' /> 
    }
  }
});

const homeStackNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({ 
      title: 'Home',
      headerLeft: (
        <Icon name='ios-menu' type='ionicon' onPress={() => navigation.navigate('DrawerOpen')} />
      ),
      headerRight: <Icon name='ios-home' type='ionicon' />
    })
  }
});

const searchStackNavigator = StackNavigator({
  Search: {
    screen: SearchScreen,
    navigationOptions: { 
      title: 'Search',
      headerRight: <Icon name='ios-search' type='ionicon' />
    }
  }
});

const settingsStackNavigator = StackNavigator({
  Settings: {
    screen: SettingsScreen,
    navigationOptions: { 
      title: 'Settings',
      headerRight: <Icon name='ios-settings' type='ionicon' />
    }
  }
});

const { height: D_HEIGHT } = Dimensions.get('window');

const homeDrawerNavigator = DrawerNavigator({
  Home: {
    screen: homeStackNavigator,
    navigationOptions: { 
      drawerLabel: 'Home',
      drawerIcon: <Icon name='ios-home' type='ionicon' /> 
    }
  },
  Store: {
    screen: storeStackNavigator,
    navigationOptions: { 
      drawerLabel: 'Store',
      drawerIcon: <Icon name='ios-pricetags' type='ionicon' />
    }
  },
  Service: {
    screen: serviceStackNavigator,
    navigationOptions: { 
      drawerLabel: 'Service',
      drawerIcon: <Icon name='ios-list-box' type='ionicon' />
    }
  }
}, {
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentComponent: props => (
      <ScrollView>
        <SafeAreaView
          style={{ height: D_HEIGHT }}
          forceInset={{ top: 'always', horizontal: 'never' }}
        >
          <View style={{ flex: 1 }}>
            <View style={{ flex: 3 }}>
              <DrawerItems {...props} />
            </View>
            <View style={{ flex: 1 }}>
              <Button
                transparent
                title='Logout'
                onPress={() => props.navigation.navigate('Auth')}
              />
              <Button
                transparent
                title='Exit'
                onPress={() => props.navigation.navigate('Welcome')}
              />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    )
  });

const homeTabNavigator = TabNavigator({
  Home: {
    screen: homeDrawerNavigator,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Home',
      tabBarIcon: ({ focused }) => (
        <Icon name={focused ? 'ios-home' : 'ios-home-outline'} type='ionicon' />
      ),
      tabBarOnPress: ({ scene, jumpToIndex }) => {
        if (!scene.focused) {
          jumpToIndex(scene.index);
        } else if (scene.route.routes[0].index > 0) {
          navigation.navigate('Home');
        }
      }
    })
  },
  Contacts: {
    screen: contactsStackNavigator,
    navigationOptions: { 
      tabBarLabel: 'Contacts',
      tabBarIcon: ({ focused }) => (
        <Icon name={focused ? 'ios-contacts' : 'ios-contacts-outline'} type='ionicon' />
      )
    }
  },
  Settings: {
    screen: settingsStackNavigator,
    navigationOptions: { 
      tabBarLabel: 'Settings',
      tabBarIcon: ({ focused }) => (
        <Icon name={focused ? 'ios-settings' : 'ios-settings-outline'} type='ionicon' />
      )    
    }
  },
  Search: {
    screen: searchStackNavigator,
    navigationOptions: { 
      tabBarLabel: 'Search',
      tabBarIcon: ({ focused }) => (
        <Icon name={focused ? 'ios-search' : 'ios-search-outline'} type='ionicon' />
      )        
    }
  }
},
  {
    initialRouteName: 'Home',
    animationEnabled: false,
    lazyLoad: true,
    swipeEnabled: false,
    tabBarOptions: {
      labelStyle: { fontSize: 10 },
      showIcon: true,
      tabStyle: { marginTop: 20 }
    }
  });

export default class MainTabNavigation extends React.Component {
  render() {
    const MainTabNavigator = TabNavigator({
      Welcome: { screen: WelcomeScreen },
      Auth: { screen: authStackNavigator },
      Main: { screen: homeTabNavigator }
    }, {
        initialRouteName: 'Welcome',
        animationEnabled: false,
        lazyLoad: true,
        swipeEnabled: false,
        navigationOptions: { tabBarVisible: false }
      });

    return (
      <MainTabNavigator />
    );
  }
}
