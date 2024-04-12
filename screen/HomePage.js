// HomePage.js

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const HomePage = () => {
 // Array of product images with their sources
 const products = [
  require('../assets/b1.jpg'),
  require('../assets/b1.jpg'),
  require('../assets/cc.jpeg'),
];

return (
  <View style={styles.container}>
    <View style={styles.productsContainer}>
      {products.map((product, index) => (
        <Image key={index} source={product} style={styles.productImage} />
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
  flexDirection: 'row',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  padding: 10,
},
productImage: {
  width: 100,
  height: 100,
  borderRadius: 5,
  marginBottom: 10,
},
});

export default HomePage;
