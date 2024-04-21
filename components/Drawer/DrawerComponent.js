// MyDrawer.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutComponent from './AboutComponent';
import { NavigationContainer } from '@react-navigation/native';
import ServicesComponent from './ServicesComponent';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="About" component={AboutComponent} />
                <Drawer.Screen name="Services" component={ServicesComponent} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default MyDrawer;
