import React from 'react';
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const ChooseBoardScreen = (props) => {
    const { navigation } = props;

    // console.log(props.route.params.tenthResultLink);

    return (<ScrollView style={styles.scrollViewConteiner}>
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={{ uri: props.route.params.imageUrl }} style={styles.image} />
                <Text style={styles.title}>{props.route.params.name}</Text>
                <Text>Release Date {props.route.params.releaseDate}</Text>
            </View>
            <View style={styles.wrapper}>
                <TouchableOpacity style={styles.button10} onPress={() => navigation.navigate('Result', props.route.params.tenthResultLink)}>
                    <Text style={styles.buttonText}>10th Board Press Here</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button12} onPress={() => navigation.navigate('Result', props.route.params.twelfthResultLink)}>
                    <Text style={styles.buttonText}>12th Board Press Here</Text>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    width: '85%',
                    height: 1,
                    backgroundColor: '#999'
                }}>
            </View>
            {
                (props.route.params.tenthServer2 || props.route.params.twelfthServer2) ?
                    (<View style={styles.wrapper}>
                        {props.route.params.tenthServer2 ? (<TouchableOpacity style={styles.button10} onPress={() => navigation.navigate('Check Result', props.route.params.tenthResultLink)}>
                            <Text style={styles.buttonText}>10th Board | server 2</Text>
                        </TouchableOpacity>) : <View></View>}
                        {props.route.params.twelfthServer2 ? (<TouchableOpacity style={styles.button12} onPress={() => navigation.navigate('Check Result', props.route.params.twelfthResultLink)}>
                            <Text style={styles.buttonText}>12th Board | server 2</Text>
                        </TouchableOpacity>) : <View></View>}
                    </View>) : <View></View>
            }
        </View>
    </ScrollView>
    )
};

const styles = StyleSheet.create({
    scrollViewConteiner: {
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        marginTop: 20,
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
    button10: {
        width: '60%',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 25,
        backgroundColor: '#0091ea',
        marginBottom: 20,
    },
    button12: {
        width: '60%',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 25,
        backgroundColor: '#e91e63',
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
});

export default ChooseBoardScreen;
