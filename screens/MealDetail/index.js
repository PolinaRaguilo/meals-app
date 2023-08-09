import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useContext, useLayoutEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {MEALS} from '../../data/dummy-data';
import MealDetailInfo from '../../components/MealDetailInfo';
import {ScrollView} from 'react-native-gesture-handler';
import IconButton from '../../components/IconButton';
import {FavoritesContext} from '../../store/context/favorite-context';

const MealDetail = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {addFavorite, removeFavorite, ids} = useContext(FavoritesContext);
  const {mealId} = route.params;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  const mealsFavorite = ids.includes(mealId);

  const onPressFavorite = () => {
    if (mealsFavorite) {
      removeFavorite(mealId);
      return;
    }
    addFavorite(mealId);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <IconButton
          iconName={mealsFavorite ? 'star' : 'star-outline'}
          onPress={onPressFavorite}
        />
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation, mealsFavorite]);

  return (
    <ScrollView style={styles.root}>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetailInfo
        textStyle={styles.detailsText}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        duration={selectedMeal.duration}
      />

      <View style={styles.inner}>
        <View style={styles.listsContainer}>
          <View style={styles.subtitleWrapper}>
            <Text style={styles.subtitle}>Ingridients</Text>
          </View>
          {selectedMeal.ingredients.map(item => (
            <View key={item} style={styles.listItem}>
              <Text key={item} style={styles.listItemText}>
                {item}
              </Text>
            </View>
          ))}
          <View style={styles.subtitleWrapper}>
            <Text style={styles.subtitle}>Steps</Text>
          </View>
          {selectedMeal.steps.map(item => (
            <View key={item} style={styles.listItem}>
              <Text key={item} style={styles.listItemText}>
                {item}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailsText: {
    color: 'white',
  },
  subtitleWrapper: {
    padding: 6,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  subtitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inner: {
    alignItems: 'center',
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e2b497',
  },
  listItemText: {
    color: '#351401',
    textAlign: 'center',
  },
  listsContainer: {
    width: '80%',
  },
});

export default MealDetail;
