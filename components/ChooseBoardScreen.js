import React from 'react';
import { Image, Text, TouchableOpacity, View, SafeAreaView, StatusBar } from 'react-native';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const ChooseBoardScreen = ({ navigation, route }) => {
    const { imageUrl, name, releaseDate, tenthResultLink, twelfthResultLink, tenthServer2, twelfthServer2 } = route.params;

    const renderButton = (title, onPress, colors, icon) => (
        <TouchableOpacity onPress={onPress}>
            <LinearGradient
                colors={colors}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.button}
            >
                <Ionicons name={icon} size={24} color="white" style={styles.buttonIcon} />
                <Text style={styles.buttonText}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <LinearGradient
                    colors={['#4e54c8', '#8f94fb']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.headerGradient}
                >
                    <View style={styles.header}>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{name}</Text>
                        <Text style={styles.subtitle}>Release Date: {releaseDate}</Text>
                    </View>
                </LinearGradient>

                <View style={styles.content}>
                    <Text style={styles.sectionTitle}>Choose Your Board</Text>
                    {renderButton('10th Board', () => navigation.navigate('Result', tenthResultLink), ['#00c6fb', '#005bea'], 'school-outline')}
                    {renderButton('12th Board', () => navigation.navigate('Result', twelfthResultLink), ['#f77062', '#fe5196'], 'library-outline')}

                    {(tenthServer2 || twelfthServer2) && (
                        <>
                            <View style={styles.divider} />
                            <Text style={styles.sectionTitle}>Alternative Servers</Text>
                            {tenthServer2 && renderButton('10th Board | Server 2', () => navigation.navigate('Check Result', tenthResultLink), ['#4facfe', '#00f2fe'], 'server-outline')}
                            {twelfthServer2 && renderButton('12th Board | Server 2', () => navigation.navigate('Check Result', twelfthResultLink), ['#fa709a', '#fee140'], 'globe-outline')}
                        </>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    headerGradient: {
        paddingTop: 60,
        paddingBottom: 40,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    header: {
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'cover',
        borderRadius: 75,
        borderWidth: 3,
        borderColor: 'white',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 20,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.8)',
        marginTop: 5,
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 30,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 12,
        marginBottom: 15,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    buttonIcon: {
        marginRight: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
    divider: {
        height: 1,
        backgroundColor: '#ddd',
        marginVertical: 30,
    },
});

export default ChooseBoardScreen;