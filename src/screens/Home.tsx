import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import GalleryButton from '../components/GalleryButton';

const Home: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <GalleryButton onImageSelected={setSelectedImage} />
      </View>
      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.image} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  buttonContainer: {
    marginBottom: 20,
    width: '80%',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});

export default Home;
