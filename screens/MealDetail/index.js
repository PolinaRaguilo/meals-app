import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {MEALS} from '../../data/dummy-data';
import MealDetailInfo from '../../components/MealDetailInfo';
import {ScrollView} from 'react-native-gesture-handler';

const MealDetail = () => {
  const route = useRoute();
  const {mealId} = route.params;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

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
            <View style={styles.listItem}>
              <Text key={item} style={styles.listItemText}>
                {item}
              </Text>
            </View>
          ))}
          <View style={styles.subtitleWrapper}>
            <Text style={styles.subtitle}>Steps</Text>
          </View>
          {selectedMeal.steps.map(item => (
            <View style={styles.listItem}>
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
