import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { data } from '../../../data/data'

const AddButton = () => {

    const currentSaldo = data[0].totalSaldo
    console.log('current saldo', currentSaldo)
    const [number, setNumber] = useState()

    const handleAdd = () => {
      let newAddSaldo = 0

      newAddSaldo += currentSaldo

      // setNumber(newAddSaldo)
      console.log('new Add saldo', newAddSaldo)
    }

  return (
    <View style={styles.buttonContainer}>
        <TextInput
            style={styles.input}
            onChange={handleAdd}
            value={number}
            keyboardType='numeric'
        />
    </View>
  )
}

export default AddButton

const styles = StyleSheet.create({

    buttonContainer: {
        justifyContent: 'center', 
        alignItems: 'center'
    },

    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '80%',
        backgroundColor: "#D9D9D9",
        borderRadius: 10,
        marginTop: 30,
      },
})