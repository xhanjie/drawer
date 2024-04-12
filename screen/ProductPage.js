// ProductPage.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProductPage = ({ route }) => {
  const { productId } = route.params;
  const navigation = useNavigation(); // Get navigation object

  let category;
  let subProducts = [];

  // Determine the category and sub-products based on the productId
  switch (productId) {
    case 1:
      category = "Leather Shoes";
      subProducts = [
        { 
            image: require('../assets/b1.jpg'), // Elegant
            name: "Durable",
            price: 500,
            quality: "Authentic"
          },
          { 
            image: require('../assets/b1.jpg'),
            name: "Casual",
            price: 750, // Example price
            quality: "Authentic" // Example quality
          },
          { 
            image: require('../assets/b1.jpg'),
            name: "Elegant",
            price: 750, // Example price
            quality: "Authentic" // Example quality
          }
      ];
      break;
    case 2:
      category = "Sport Shoes";
      subProducts = [
        { 
            image: require('../assets/c1.jpeg'), // Elegant
            name: "Nike",
            price: 500,
            quality: "Original"
          },
          { 
            image: require('../assets/c1.jpeg'),
            name: "Reebok",
            price: 350, // Example price
            quality: "Original" // Example quality
          },
          { 
            image: require('../assets/c1.jpeg'),
            name: "Nike Girl",
            price: 450, // Example price
            quality: "Original" // Example quality
          }
      ];
      break;
    case 3:
      category = "School";
      subProducts = [
        { 
            image: require('../assets/cc.jpeg'), // Elegant
            name: "Black Leather",
            price: 500,
            quality: "Authentic"
          },
          { 
            image: require('../assets/cc.jpeg'),
            name: "Black for girls",
            price: 350, // Example price
            quality: "Good" // Example quality
          },
          { 
            image: require('../assets/cc.jpeg'),
            name: "Unisex",
            price: 450, // Example price
            quality: "Authentic" // Example quality
          }
      ];
      break;
    default:
      category = "Unknown";
      break;
  }

  // Function to handle sub-product click
  const handleSubProductClick = (subProduct) => {
    // Navigate to the "AddProduct" page with product details
    navigation.navigate('AddProduct', {
      productId: productId,
      category: category,
      name: subProduct.name,
      price: subProduct.price,
      quality: subProduct.quality,
      image: subProduct.image // Pass the image URI
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.categoryText}>{category} :</Text>
      <View style={styles.subProductsContainer}>
        {subProducts.map((subProduct, index) => (
          <TouchableOpacity key={index} onPress={() => handleSubProductClick(subProduct)}>
            <Image source={subProduct.image} style={styles.subProductImage} />
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
  },
  categoryText: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  subProductsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 20,
  },
  subProductImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginBottom: 20,
  },
});

export default ProductPage;
