import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import Categories from './screens/Categories';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MealsOverview from './screens/MealsOverview';
import MealDetail from './screens/MealDetail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
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
            name="MealCategories"
            component={Categories}
            options={{
              title: 'All Categories',
            }}
          />
          <Stack.Screen name="MealOverview" component={MealsOverview} />
          <Stack.Screen name="MealDetail" component={MealDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
