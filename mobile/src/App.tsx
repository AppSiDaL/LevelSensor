import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './screens/Home/Index'
import { Ionicons } from '@expo/vector-icons'
import 'react-native-gesture-handler'

const Tab = createBottomTabNavigator()

function App (): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }: any) => {
            let iconName: any

            // Selecciona un icono para cada ruta
            if (route.name === 'Home') {
              iconName = focused === true ? 'home' : 'home-outline'
            }

            // Puedes devolver cualquier componente que quieras aquí, incluyendo un icono personalizado.
            // Aquí estamos devolviendo un icono de Ionicons.
            return <Ionicons name={iconName} size={size} color={color} />
          }
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        {/* Add more routes here */}
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
