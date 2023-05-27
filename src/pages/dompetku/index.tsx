import React, { useState } from 'react';
import { Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IDompetDetail } from '../../interfaces';
import LinearGradient from 'react-native-linear-gradient';
import { data } from '../../data/data';
import AddSaldo from '../../component/button/add_saldo';
import AddDompet from '../../component/button/add_dompet';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../component/colors';

const Dompetku = () => {
  const navigation = useNavigation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedDompet, setSelectedDompet] = useState<IDompetDetail | null>(null);

  const handleEdit = (dompet: IDompetDetail) => {
    setSelectedDompet(dompet);
    setShowDropdown(true);
  };

  const handleLihatRiwayat = (dompet: IDompetDetail) => {
    setSelectedDompet(dompet);
    setShowDropdown(true);
  };

  const handleDropdownOption = (option: string) => {
    if (option === 'Edit') {
      if (selectedDompet) {
        navigation.navigate('Edit Dompet Form', { dompet: selectedDompet });
      }
    } else if (option === 'Lihat Riwayat') {
      if (selectedDompet) {
        navigation.navigate('Lihat Riwayat', { dompet: selectedDompet });
      }
    }
    setShowDropdown(false);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <AddDompet />
        <ScrollView>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {data.map((item) =>
              item.dompetDetail.map((dompetDetail) => {
                const backgroundColor = colors[dompetDetail.id % colors.length];
                return (
                  <LinearGradient key={dompetDetail.id} colors={backgroundColor} style={styles.dompetkuContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <View style={styles.dompetNameContainer}>
                        <Image source={require('../../../assets/Vector.png')} style={styles.image} />
                        <Text style={styles.text}>{dompetDetail.dompetName}</Text>
                        <TouchableOpacity style={styles.imageContainer} onPress={() => handleEdit(dompetDetail)}>
                          <Image source={require('../../../assets/ThreeDots.png')} />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <View style={styles.saldoContainer}>
                        <Text style={styles.text}>Saldo:</Text>
                        <Text style={styles.text}>{dompetDetail.saldo.toLocaleString()}</Text>
                      </View>
                      <View style={styles.imageContainer}>
                        <Image source={require('../../../assets/WIFI.png')} style={styles.image} />
                      </View>
                    </View>
                    <View style={styles.deskripsiContainer}>
                      <Text style={styles.text}>{dompetDetail.deskripsi}</Text>
                    </View>
                  </LinearGradient>
                );
              })
            )}
          </View>
        </ScrollView>
      </ScrollView>

      <Modal visible={showDropdown} transparent>
        <TouchableOpacity style={styles.dropdownContainer} activeOpacity={1} onPress={() => setShowDropdown(false)}>
          <View style={styles.dropdownContent}>
          <TouchableOpacity style={styles.dropdownOption} onPress={() => handleDropdownOption('Edit')}>
              <Text style={styles.dropdownText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownOption} onPress={() => handleDropdownOption('Lihat Riwayat')}>
              <Text style={styles.dropdownText}>Lihat Riwayat</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

export default Dompetku;

const styles = StyleSheet.create({
  dompetkuContainer: {
    width: '80%',
    margin: 20,
    borderRadius: 9,
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
    padding: 10,
    flex: 1,
    alignItems: 'flex-end',
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
  dropdownContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dropdownContent: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
  },
  dropdownOption: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  dropdownText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});