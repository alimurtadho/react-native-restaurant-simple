import React from 'react';

import { View, Text, StyleSheet,ScrollView } from 'react-native';

export default class Burgers extends React.Component {
  static navigationOptions = {
    title: 'Burgers'
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <MenuItem
            title='Guacamole'
            price='$6'
            description='Prepared at tableside'
            source={require('../../../assets/images/guacamole.jpg')}
            alignself='center'
          />
          <MenuItem
            title='Tacos'
            price='$10'
            description='Served With Salsa, Hot Tortillas, Rice, And Beans'
            source={require('../../../assets/images/tacos.jpg')}
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})