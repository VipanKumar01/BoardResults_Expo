import React from 'react';
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'react-native';


const ChooseBoardScreen = (props) => {
    // console.log(props.route.params);
    const { navigation } = props;
    // console.log(navigation);

    // Take a url of the image as props and display it in this screen.

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={props.route.params.imageUrl} style={styles.image} />
                <Text style={styles.title}>{props.route.params.name}</Text>
            </View>
            <View style={styles.wrapper}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Result', props.route.params.resultWebsiteLink.tenth)}>
                    <Text style={styles.buttonText}>10th Board Press Here</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Result', props.route.params.resultWebsiteLink.twelfth)}>
                    <Text style={styles.buttonText}>12th Board Press Here</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 100,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
    },
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    button: {
        width: '60%',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 25,
        backgroundColor: '#09a144',
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
});

export default ChooseBoardScreen;
