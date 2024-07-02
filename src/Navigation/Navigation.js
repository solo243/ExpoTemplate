import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Search from '../Screens/Search';
import Profile from '../Screens/Profile';
import Cetegory from '../Screens/Cetegory';
import { Colors } from '../Constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Save from '../Screens/Save';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from '../Screens/DetailScreen';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export const Navigation = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: Colors.MainColor,
                borderTopWidth: 0,
                alignItems: 'center',
                justifyContent: 'space-between',
            },
            tabBarLabelStyle: {
                color: 'gray',
                marginTop: -10,
                textAlign: 'center',
                fontSize: 11
            },
            tabBarShowLabel: false
        }}>
            <Tab.Screen name='Home' component={Home} options={{

                tabBarIcon: ({ focused }) =>
                    focused ? (
                        <MaterialCommunityIcons name="home-variant" size={24} color="red" />
                    ) : (
                        <MaterialCommunityIcons name="home-variant-outline" size={24} color="gray" />
                    ),
            }} />
            <Tab.Screen name='Search' component={Search} options={{
                tabBarIcon: ({ focused }) =>
                    focused ? (
                        <Ionicons name="search" size={24} color='red' />
                    ) : (
                        <Ionicons name="search-outline" size={24} color="gray" />
                    ),
            }} />
            <Tab.Screen name='Save' component={Save} options={{

                tabBarIcon: ({ focused }) =>
                    focused ? (
                        <AntDesign name="heart" size={21} color="red" />
                    ) : (
                        <AntDesign name="hearto" size={21} color="gray" />
                    ),
            }} />
            <Tab.Screen name='Profile' component={Profile} options={{
                tabBarIcon: ({ focused }) =>
                    focused ? (
                        <Ionicons name="person" size={24} color="red" />
                    ) : (
                        <Ionicons name="person-outline" size={24} color="gray" />
                    ),
            }} />
        </Tab.Navigator>
    )
}

export const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen
                    name="MainComponents"
                    component={Navigation} />
                <Stack.Screen options={{
                    animation:
                        'slide_from_right',
                    animationDuration: 10000
                }}
                    name="Categories"
                    component={Cetegory} />
                <Stack.Screen
                    options={{
                        animation: 'fade_from_bottom'
                    }}
                    name='Details'
                    component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}