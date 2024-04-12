// AddProduct.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const AddProduct = ({ route }) => {
  const { productId, category, name, price, quality, image } = route.params; // Get product details from route params

  const handleBuyPress = () => {
    // Add functionality for the Buy button press here
    console.log('Buy button pressed');
  };

  return (
    <View style={styles.container}>
      <Text>Product ID: {productId}</Text>
      <Text>Category: {category}</Text>
      <Text>Name: {name}</Text>
      <Text>Price: ${price}</Text>
      <Text>Quality: {quality}</Text>
      {/* Display more product details here */}
      {/* Display the clicked sub-product's image */}
      <Image source={image} style={styles.productImage} />
      
      {/* Buy button */}
      <TouchableOpacity style={styles.buyButton} onPress={handleBuyPress}>
        <Text style={styles.buyButtonText}>Buy</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 5,
  },
  buyButton: {
    backgroundColor: 'darkgreen',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    marginTop: 20,
  },
  buyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddProduct;
