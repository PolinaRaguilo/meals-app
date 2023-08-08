import React from 'react';
import {FlatList} from 'react-native';
import {CATEGORIES} from '../../data/dummy-data';
import CategoryGridTile from '../../components/CategoryGridTile';
import {useNavigation} from '@react-navigation/native';

const Categories = () => {
  const navigate = useNavigation();
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      numColumns={2}
      renderItem={({item}) => (
        <CategoryGridTile
          title={item.title}
          color={item.color}
          onPress={() =>
            navigate.navigate('MealOverview', {
              categoryId: item.id,
            })
          }
        />
      )}
    />
  );
};

export default Categories;
