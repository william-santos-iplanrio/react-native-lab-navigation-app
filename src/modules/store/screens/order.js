import React from 'react';
import { Text, Button, View } from 'react-native';

export default class OrderScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Order</Text>
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
