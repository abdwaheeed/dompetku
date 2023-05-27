import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import { IDompet, IDompetCardProps } from '../../interfaces';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../colors';

const DompetCard = ({dompetDetail} : IDompetCardProps) => {

  const backgroundColor = colors[dompetDetail.id % colors.length];

  return (
    <LinearGradient colors={backgroundColor} style={styles.dompetCardContainer}>
      <View style={styles.dompetNameContainer}>
        <Image source={require("../../../assets/Vector.png") } style={styles.image} />
        <Text style={styles.text}>{dompetDetail.dompetName}</Text>
      </View>
      <View style={styles.saldoDetailContainer}>
        <View style={styles.saldoContainer}>
          <Text style={styles.text}>Saldo:</Text>
          <Text style={styles.text}>{dompetDetail.saldo.toLocaleString()}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require("../../../assets/WIFI.png") } style={styles.image} />
        </View>
      </View>
      <View style={styles.deskripsiContainer}>
        <Text style={styles.text}>{dompetDetail.deskripsi}</Text>
      </View>
    </LinearGradient>
  );
};

export default DompetCard;

const styles = StyleSheet.create({

  dompetCardContainer:{
    // backgroundColor: "rgb(131,58,180)",
    width: 275,
    // padding: 50,
    margin: 20,
    borderRadius: 9
    // backgroundColor: "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(188,101,89,0) 50%, rgba(252,176,69,1) 100%);"
  },

  dompetNameContainer:{
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  image:{
    marginRight: 10,
    width: 30,
    height: 30,
  },

  imageContainer :{
    flex: 1,
    alignItems: 'flex-end',
  },

  saldoDetailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  saldoContainer : {
    flexDirection: 'column',
    marginRight: 10,
    padding: 10
  },

  deskripsiContainer:{
    padding: 10,
  },

  text:{
    color: "white",
    fontWeight: 'bold',
    fontSize: 15
  }
})
