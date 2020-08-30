import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default class Input extends Component {
    state = {
        text: ''
    };

    render() {
        return (
            <View>
                <TextInput
                    {...this.props}
                    placeholderTextColor="grey"
                    style={styles.input}
                    value={this.state.text}
                    onChangeText={text => this.setState({text})}
                />

     </View>
    );
    }
}

const styles = StyleSheet.create({
    input: {
        height: 35,
       // paddingHorizontal: 5,
        borderWidth: 0,
        borderRadius: 30,
        borderColor: '#9c848a',
        color: '#540e20',
        marginBottom: 2,
        fontSize: 14,
        fontWeight: '600',
        backgroundColor: 'white',
        margin:3,
        width:'92%',
        paddingLeft:35,
        marginLeft:'4%',
    },
    line:{
        height: 1,
        backgroundColor:'grey',

    },

});
