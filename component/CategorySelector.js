// CategorySelector.js
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const CategorySelector = ({ categories, onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <View style={styles.container}>
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleCategorySelect(category)}
          style={[styles.categoryButton, category === selectedCategory && styles.selectedCategoryButton]}
        >
          <Text style={styles.categoryButtonText}>{category}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  selectedCategoryButton: {
    backgroundColor: '#007bff',
  },
  categoryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CategorySelector;
