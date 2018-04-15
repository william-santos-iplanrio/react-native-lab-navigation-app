import React from 'react';
import { View, Text } from 'react-native';
import { Button, Icon, FormLabel, FormInput } from 'react-native-elements';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Icon
            name='ios-person'
            type='ionicon'
            size={96}
          />
          <Text>Login</Text>
        </View>

        <View style={{ flex: 1 }}>
          <View>
            <FormLabel>Email</FormLabel>
            <FormInput
              value={'exemple@gmail.com'}
            />
          </View>
          <View>
            <FormLabel>Password</FormLabel>
            <FormInput
              value={'teste'}
              secureTextEntry
            />
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <Button
            raised
            title='Login'
            onPress={() => this.props.navigation.navigate('Main')}
          />
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <View>
            <Button
              transparent
              title='Register'
              color='blue'
              onPress={() => this.props.navigation.navigate('Register')}
            />
          </View>
          <View>
            <Button
              transparent
              title='Recovery'
              color='blue'
              onPress={() => this.props.navigation.navigate('Recovery')}
            />
          </View>
        </View>
      </View>
    );
  }
}
