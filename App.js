import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; // Import createStackNavigator
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Footer from './component/Footer'; // Import Footer component
import ProfilePage from './screen/ProfilePage'; // Import ProfilePage component
import AboutPage from './screen/AboutPage'; // Import AboutPage component
import ContactUs from './screen/ContactUs'; // Import ContactUs component
import Setting from './screen/Setting'; // Import Setting component
import Cart from './screen/Cart'; // Import Cart component
import ProductPage from './screen/ProductPage'; // Import ProductPage component
import AddProduct from './screen/AddProduct'; // Import AddProduct component

// Define CustomDrawerContent component or import it from another file if defined elsewhere
const CustomDrawerContent = (props) => {
  const navigation = useNavigation(); // Use useNavigation hook to get navigation prop

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Home"
        onPress={() => navigation.navigate('Home')}
      />

      <DrawerItem
        label="About Us"
        onPress={() => navigation.navigate('AboutUs')}
      />
      <DrawerItem
        label="Contact Us"
        onPress={() => navigation.navigate('ContactUs')}
      />
      <DrawerItem
        label="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </DrawerContentScrollView>
  );
};

// Drawer navigator
const Drawer = createDrawerNavigator();

// Create a stack navigator for the Cart and ProductPage screens
const Stack = createStackNavigator();

// Define CartStackScreen component
const CartStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="Cart" component={Cart} />
  </Stack.Navigator>
);

// Create a stack navigator for the ProductPage and AddProduct screens
const ProductPageStack = createStackNavigator();

// Define ProductPageStackScreen component
const ProductPageStackScreen = () => (
  <ProductPageStack.Navigator>
    <ProductPageStack.Screen name="Home" component={ProfilePage} />
    <ProductPageStack.Screen name="ProductPage" component={ProductPage} />
    <ProductPageStack.Screen name="AddProduct" component={AddProduct} />
  </ProductPageStack.Navigator>
);

// App component (HomeScreen)
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={ProfilePage} />
        <Drawer.Screen name="Profile" component={ProfilePage} />
        <Drawer.Screen name="AboutUs" component={AboutPage} />
        <Drawer.Screen name="ContactUs" component={ContactUs} />
        <Drawer.Screen name="Settings" component={Setting} />
        <Drawer.Screen name="Cart" component={CartStackScreen} />
        <Drawer.Screen name="ProductPage" component={ProductPageStackScreen} />
      </Drawer.Navigator>

      <Footer /> {/* Place Footer component here */}
    </NavigationContainer>
  );
};

export default App;
