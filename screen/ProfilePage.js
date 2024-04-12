import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const ProfilePage = () => {
  const navigation = useNavigation(); // Use useNavigation hook to get navigation prop

  // Array of product images with their sources
  const products = [
    { id: 1, imageSource: require('../assets/b1.jpg') },
    { id: 2, imageSource: require('../assets/2.jpg') },
    { id: 3, imageSource: require('../assets/cc.jpeg') },
  ];

   // Function to handle product image click
   const handleProductClick = (productId) => {
    // Navigate to ProductPage with the selected product's ID
    navigation.navigate('ProductPage', { productId });
  };

  return (
    <View style={styles.container}>
      <View style={styles.productsContainer}>
        {products.map((product) => (
          <TouchableOpacity key={product.id} onPress={() => handleProductClick(product.id)}>
            <Image source={product.imageSource} style={styles.productImage} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productsContainer: {
    flexDirection: 'column', // Align vertically
    alignItems: 'center', // Center horizontally
    paddingVertical: 20, // Padding of 20
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginBottom: 20, // Increase marginBottom for spacing between images
  },
});

export default ProfilePage;
