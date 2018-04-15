import React from 'react';
import { Text, Button, View } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Service</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Button
            transparent
            title='Request'
            onPress={() => this.props.navigation.navigate('Request')}
          />
        </View>
      </View>
    );
  }
}
