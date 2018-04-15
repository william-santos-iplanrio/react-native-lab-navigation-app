import React from 'react';
import { Text, Button, View } from 'react-native';

export default class RequestScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Request</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Button
            transparent
            title='Go Back to Home'
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
      </View>
    );
  }
}
