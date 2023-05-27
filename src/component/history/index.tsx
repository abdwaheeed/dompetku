import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../colors';

const { width } = Dimensions.get('window');

const History = ({ route }: any) => {
  const { dompet }: { dompet: any } = route.params;
  const backgroundColor = colors[dompet.id % colors.length];
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = ['Pemasukan', 'Pengeluaran'];

  const handleSave = () => {
    console.log('Save button pressed');
    console.log('Selected Category:', selectedCategory);
  };

  const handleDropdownPress = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={backgroundColor} style={styles.dompetCardContainer}>
        <View style={styles.dompetNameContainer}>
          <Image source={require("../../../assets/Vector.png")} style={styles.image} />
          <Text style={styles.text}>{dompet.dompetName}</Text>
        </View>
        <View style={styles.saldoDetailContainer}>
          <View style={styles.saldoContainer}>
            <Text style={styles.text}>Saldo:</Text>
            <Text style={styles.text}>{dompet.saldo.toLocaleString()}</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={require("../../../assets/WIFI.png")} style={styles.image} />
          </View>
        </View>
        <View style={styles.deskripsiContainer}>
          <Text style={styles.text}>{dompet.deskripsi}</Text>
        </View>
      </LinearGradient>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Choose:</Text>
        <TouchableOpacity style={styles.dropdownButton} onPress={handleDropdownPress}>
          <Text style={styles.dropdownText}>{selectedCategory ? selectedCategory : 'Choose Category'}</Text>
        </TouchableOpacity>
        {isDropdownOpen && (
          <View style={styles.dropdownContainer}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category}
                style={styles.categoryButton}
                onPress={() => handleCategorySelect(category)}
              >
                <Text style={styles.categoryButtonText}>{category}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  dompetCardContainer: {
    width: width - 40,
    borderRadius: 9,
    marginBottom: 20,
  },
  dompetNameContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    marginRight: 10,
    width: 30,
    height: 30,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  saldoDetailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  saldoContainer: {
    flexDirection: 'column',
    marginRight: 10,
    padding: 10,
  },
  deskripsiContainer: {
    padding: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  inputContainer: {
    marginTop: 10,
    padding: 10,
    width: width - 40,
    alignSelf: 'center',
  },
  label: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dropdownButton: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  dropdownText: {
    fontSize: 16,
    color: 'black',
  },
  dropdownContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 5,
  },
  categoryButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  categoryButtonText: {
    fontSize: 16,
    color: 'black',
  },
  saveButton: {
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
