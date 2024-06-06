import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutComponent from './Drawer/AboutComponent';
import ServicesComponent from './Drawer/ServicesComponent';

const Drawer = createDrawerNavigator();

const DrawerComponent = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="About" component={AboutComponent} />
            <Drawer.Screen name="Services" component={ServicesComponent} />
        </Drawer.Navigator>
    );
};

export default DrawerComponent;