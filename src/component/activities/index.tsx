import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { data } from '../../data/data'

const Activities = () => {
  return (
    <View style={styles.activitiesContainer}>
        <Text style={styles.activitiesText}>Recent Activities</Text>
        <View style={{justifyContent: 'center', alignItems: 'center' }}>
            {/* {data[0].activities}  mau buat conditional rendering  */}
            <Text style={styles.unactive}>There is no activities Yet !</Text>
        </View>
    </View>
  )
}

export default Activities

const styles = StyleSheet.create({

    activitiesContainer : {
        margin: 20,
      },
    
      activitiesText: {
        fontSize: 20,
        color: "black"
      },
    
      unactive: {
        marginTop: 40,
        fontSize: 20,
        color: "black"
      }
})