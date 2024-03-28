import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'react-native';


const ChooseBoardScreen = (props) => {
    // console.log(props.route.params);
    const { navigation } = props;
    // console.log(navigation);

    // Take a url of the image as props and display it in this screen.

    return (
        <View style={styles.wrapper}>
            <TouchableOpacity style={styles._10thButton} onPress={() => navigation.navigate('BrowserWindow', props.route.params.tenth)}>
                <Text style={styles.button_text}>Press Here</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles._12thButton} onPress={() => navigation.navigate('BrowserWindow', props.route.params.twelfth)}>
                <Text style={styles.button_text}>Press Here</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
    },
    _10thButton: {
        width: '60%',
        padding: 15,
        height: '40px',
        fontSize: '30px',
        fontWeight: '700',
        backgroundColor: '#09a144',
        borderRadius: 15,
    },
    _12thButton: {
        width: '60%',
        padding: 15,
        fontSize: '30px',
        fontWeight: '700',
        backgroundColor: '#0041C7',
        borderRadius: 15,
    },
    button_text: {
        height: '40px',
        color: 'white',
        textAlign: 'center',
    },
});

export default ChooseBoardScreen;
