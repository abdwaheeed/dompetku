import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { data } from '../../data/data'
import { IDompet } from '../../interfaces'
const TotalSaldo = () => {

    const totalSaldo = data.map((item) => item.totalSaldo)
  return (
    <View style={styles.saldoContainer}>
      <Text style={styles.text}>Total Saldo : RP. {totalSaldo.toLocaleString()} </Text>
    </View>
  )
}

export default TotalSaldo

const styles = StyleSheet.create({
    saldoContainer:{
        backgroundColor: "black",
        padding: 20
    },

    text:{
        color: "white",
        fontSize: 16
    }

})