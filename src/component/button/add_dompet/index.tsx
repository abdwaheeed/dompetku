import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const AddDompet = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.buttonParent}>
    <TouchableOpacity style={styles.buttonContainer} onPress={() =>  navigation.navigate('Add Dompet Form')}>
      <Image source={require("../../../../assets/Add.png")} style={styles.image} />
      <Text style={styles.buttonText}>Add Dompet</Text>
    </TouchableOpacity>
  </View>
  )
}

export default AddDompet

const styles = StyleSheet.create({

    buttonParent:{
        // // flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
      },
    
      buttonContainer:{
        marginHorizontal: 20,
        marginTop: 30,
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        width: '80%',
        backgroundColor: 'rgba(57, 57, 57, 0.05)'
      },
    
      image:{
        marginRight : 20,
        width: 25,
        height: 25,
      },
    
      buttonText:{
        color: 'black',
        fontSize: 20,
      },

})