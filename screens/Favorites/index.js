import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import MealItem from '../../components/MealItem';
import {FavoritesContext} from '../../store/context/favorite-context';
import {MEALS} from '../../data/dummy-data';

const Favorites = () => {
  const {ids} = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter(meal => ids.includes(meal.id));

  return favoriteMeals.length ? (
    <View style={styles.wrapper}>
      <FlatList
        data={favoriteMeals}
        keyExtractor={item => item.id}
        renderItem={({item}) => <MealItem item={item} />}
      />
    </View>
  ) : (
    <View style={styles.noFavorites}>
      <Text style={styles.noFavoritesText}>
        You have no favorite meals yet.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 16,
  },
  noFavorites: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noFavoritesText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Favorites;
