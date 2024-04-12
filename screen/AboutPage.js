// AboutPage.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AboutPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Us </Text>
      <View style={styles.imageContainer}>
        <View style={styles.imageWithText}>
          <Image
            source={require('../assets/bpp.jpeg')}
            style={styles.image}
          />
          <Text style={styles.imageText}>Project Manager</Text>
        </View>
        <View style={styles.imageWithText}>
          <Image
            source={require('../assets/rrl.jpeg')}
            style={styles.image}
          />
          <Text style={styles.imageText}>Back-end Developer</Text>
        </View>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imageContainer: {
    flexDirection: 'column', // Change to column to align vertically
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
  },
  imageWithText: {
    alignItems: 'center',
    marginBottom: 20, // Add margin between images
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginHorizontal: 10,
  },
  imageText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AboutPage;
