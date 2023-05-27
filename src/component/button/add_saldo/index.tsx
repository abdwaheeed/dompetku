import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';

const AddSaldo = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [amount, setAmount] = useState('');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleAddSaldo = () => {
    console.log('Add Saldo:', amount);
    toggleModal();
  };

  const formatCurrency = (value: string) => {
    let cleanValue = value.replace(/[^0-9]/g, '');
    let formattedValue = '';
    let count = 0;
    for (let i = cleanValue.length - 1; i >= 0; i--) {
      formattedValue = cleanValue[i] + formattedValue;
      count++;
      if (count === 3 && i > 0) {
        formattedValue = '.' + formattedValue;
        count = 0;
      }
    }
    return formattedValue;
  };

  const handleAmountChange = (value: string) => {
    setAmount(formatCurrency(value));
  };

  return (
    <View style={styles.buttonParent}>
      <TouchableOpacity style={styles.buttonContainer} onPress={toggleModal}>
        <Image source={require("../../../../assets/Add.png")} style={styles.image} />
        <Text style={styles.buttonText}>Add Saldo</Text>
      </TouchableOpacity>

      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Masukkan jumlah saldo:</Text>
          <TextInput
            style={styles.input}
            value={amount}
            onChangeText={handleAmountChange}
            keyboardType="numeric"
            placeholder="RP."
          />
          <TouchableOpacity style={styles.modalButton} onPress={handleAddSaldo}>
            <Text style={styles.modalButtonText}>Tambah</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default AddSaldo;

const styles = StyleSheet.create({
  buttonParent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginHorizontal: 20,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    backgroundColor: 'rgba(57, 57, 57, 0.05)',
  },
  image: {
    marginRight: 20,
    width: 25,
    height: 25,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
  },
  modalText: {
    color:"black",
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    color:'black',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '100%',
    borderRadius: 5,
  },
  modalButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
});