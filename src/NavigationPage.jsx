import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Loginscreen from './Loginscreen';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import quizzes from './Quizzes';
import QuizHomePage from './QuizHomePage';

const NavigationPage = () => {
    const user = useSelector((user) => user.login)
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                {!user.login && <Stack.Screen name='Home' component={Loginscreen} />}
                {user.login && <Stack.Screen name='Quis' component={QuizHomePage} />}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationPage