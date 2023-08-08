import React, {useLayoutEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {MEALS, CATEGORIES} from '../../data/dummy-data';
import {FlatList} from 'react-native-gesture-handler';
import MealItem from '../../components/MealItem';
import {useNavigation, useRoute} from '@react-navigation/native';

const MealsOverview = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const {categoryId} = route.params;

  const displayedMeals = MEALS.filter(item =>
    item.categoryIds.includes(categoryId),
  );

  //set title of the screen
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      item => item.id === categoryId,
    )?.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, categoryId]);

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={({item}) => <MealItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverview;
