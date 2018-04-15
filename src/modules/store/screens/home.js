import React from 'react';
import { Text, Button, View } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Store</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Button
            transparent
            title='Order'
            onPress={() => this.props.navigation.navigate('Order')}
          />
        </View>
      </View>
    );
  }
}
