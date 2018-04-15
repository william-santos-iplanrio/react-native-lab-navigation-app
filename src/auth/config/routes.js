import { StackNavigator } from 'react-navigation';

import LoginScreen from '../screens/login';
import RegisterScreen from '../screens/register';
import RecoveryScreen from '../screens/recovery';

const authStackNavigator = StackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: { title: 'Login' }
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: { title: 'Register' }
  },
  Recovery: {
    screen: RecoveryScreen,
    navigationOptions: { title: 'Recovery' }
  }
});

export { authStackNavigator };
