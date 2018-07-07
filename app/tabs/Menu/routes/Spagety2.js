import React from 'react';

import { View, Text, StyleSheet, ScrollView } from 'react-native';


export default class Spagety2 extends React.Component {
    static navigationOptions = {
        title: 'Spagety2'
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <MenuItem
                        title='Guacamole'
                        price='$6'
                        description='Prepared at tableside'
                        source={require('../../../assets/images/spagety1.jpg')}


                    />

                    <MenuItem
                        title='Tacos'
                        price='$10'
                        description='Served With Salsa, Hot Tortillas, Rice, And Beans'
                        source={require('../../../assets/images/spagety2.jpg')}

                    />
                    <MenuItem
                        title='Tacos'
                        price='$12'
                        description='Served With Salsa, Hot Tortillas, Rice, And Beans'
                        source={require('../../../assets/images/spagety3.jpg')}
                    />
                    <MenuItem
                        title='Tacos'
                        price='$12'
                        description='Served With Salsa, Hot Tortillas, Rice, And Beans'
                        source={require('../../../assets/images/spagety3.jpg')}
                    />
                    <MenuItem
                        title='Tacos'
                        price='$12'
                        description='Served With Salsa, Hot Tortillas, Rice, And Beans'
                        source={require('../../../assets/images/spagety3.jpg')}
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