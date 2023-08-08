import React from 'react';
import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';

const CategoryGridTile = ({title, color, onPress}) => {
  return (
    <View style={styles.tileWrapper}>
      <Pressable
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{color: '#ccc'}}
        onPress={onPress}>
        <View style={[styles.inner, {backgroundColor: color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  tileWrapper: {
    backgroundColor: 'white',
    flex: 1,
    height: 150,
    margin: 16,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  inner: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CategoryGridTile;
