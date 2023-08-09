import React from 'react';
import {StatusBar} from 'react-native';
import Categories from './screens/Categories';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MealsOverview from './screens/MealsOverview';
import MealDetail from './screens/MealDetail';
import FavoritesContextProvider from './store/context/favorite-context';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Favorites from './screens/Favorites';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#351401'},
        headerTintColor: 'white',
        sceneContainerStyle: {backgroundColor: '#3f2f25'},
        drawerActiveTintColor: '#e9a134',
        drawerContentStyle: {backgroundColor: '#faeeda'},
      }}>
      <Drawer.Screen
        name="MealCategories"
        component={Categories}
        options={{
          title: 'All Categories',
        }}
      />
      <Drawer.Screen name="Favorites" component={Favorites} />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#351401',
              },
              headerTintColor: 'white',
              cardStyle: {backgroundColor: '#3f2f25'},
            }}>
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="MealOverview" component={MealsOverview} />
            <Stack.Screen name="MealDetail" component={MealDetail} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
};

export default App;
