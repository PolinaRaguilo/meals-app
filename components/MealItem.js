import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import MealDetailInfo from './MealDetailInfo';

const MealItem = ({item}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <Pressable
        style={({pressed}) => (pressed ? styles.buttonPressed : null)}
        android_ripple={{color: '#ccc'}}
        onPress={() => {
          navigation.navigate('MealDetail', {
            mealId: item.id,
          });
        }}>
        <View style={styles.inner}>
          <View>
            <Image style={styles.image} source={{uri: item.imageUrl}} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <MealDetailInfo
            affordability={item.affordability}
            complexity={item.complexity}
            duration={item.duration}
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 4,

    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  inner: {
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },

  buttonPressed: {
    opacity: 0.5,
  },
});

export default MealItem;
