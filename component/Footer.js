import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo vector icons
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation(); // Use useNavigation hook to get navigation prop

  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  const navigateToWishlist = () => {
    navigation.navigate('Wishlist'); // Adjust navigation to Wishlist screen
  };

  const navigateToCart = () => {
    navigation.navigate('Cart');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToHome}>
        <Ionicons name="home-outline" size={24} color="black" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToWishlist}>
        <Ionicons name="star-outline" size={24} color="black" style={styles.icon} /> {/* Star icon */}
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToCart}>
        <Ionicons name="cart-outline" size={24} color="black" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  icon: {
    marginRight: 20,
  },
});

export default Footer;
