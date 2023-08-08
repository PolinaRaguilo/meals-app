import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const IconButton = ({iconName, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => (pressed ? styles.pressed : null)}>
      <Icon name={iconName} size={24} color="white" />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
