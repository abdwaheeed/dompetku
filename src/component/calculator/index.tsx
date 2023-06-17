import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Formik, FormikErrors } from 'formik'
import { ICalculator } from '../../interfaces';

const Calculator = () => {

    const [formData, setFormData] = useState<ICalculator>({
        targetNominal: "",
        targetWaktu: "",
        nominalSekarang: "",
    });
    const [nominalPerbulan, setNominalPerbulan] = useState("")
    
      const handleSubmit = (values: ICalculator) => {
        let targetNominal = parseInt(values.targetNominal)
        let waktu = parseInt(values.targetWaktu)
        let nominalSekarang = parseInt(values.nominalSekarang)

        let perbulan = Math.floor((targetNominal - nominalSekarang) / (waktu * 12))

        setNominalPerbulan(perbulan.toString())
      };

      const validate = (values: ICalculator) => {
        const errors: FormikErrors<ICalculator> = {};

        if(parseInt(values.nominalSekarang) > parseInt(values.targetNominal)){
            errors.targetWaktu = "Saldo Sekarang tidak boleh melebihi target"
        }
        return errors;
      };
    //   useEffect(() => {
    //     handleSubmit
    // },[])
    
  return (
    <View>
      <Formik initialValues={formData} validate={validate} onSubmit={handleSubmit}>
        {({ handleChange, handleSubmit, values, errors, isValid }) => (
          <View style={styles.formContainer}>
            <View style={styles.container}>
              <Text style={styles.text}>Target Nominal :</Text>
              <TextInput
                keyboardType="numeric"
                value={values.targetNominal}
                onChangeText={handleChange('targetNominal')} // Menentukan field yang diubah
                style={styles.input}
              />
            </View>
            <View style={styles.container}>
              <Text style={styles.text}>Target Waktu (Tahun) :</Text>
              <TextInput
                value={values.targetWaktu}
                keyboardType="numeric"
                onChangeText={handleChange('targetWaktu')} // Menentukan field yang diubah
                style={styles.input}
              />
            </View>

            <View style={styles.container}>
              <Text style={styles.text}>Nominal Sekarang :</Text>
              <TextInput
                value={values.nominalSekarang}
                keyboardType="numeric"
                onChangeText={handleChange('nominalSekarang')} // Menentukan field yang diubah
                style={styles.input}
              />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSubmit}
                    disabled={!isValid}
                >
                    <Text style={styles.buttonText}>Hitung</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.container}>
              <Text style={styles.text}>Nominal Perbulan</Text>
              <TextInput
                value={nominalPerbulan}
                // keyboardType="numeric"
                // onChangeText={handleChange('nominalSekarang')} // Menentukan field yang diubah
                style={styles.input}
              />
                {errors.targetWaktu && (
                    <Text style={{ color: "red" }}>{errors.targetWaktu}</Text>
                )}
            </View>
          </View>

          
        )}
      </Formik>
    </View>
  )
}

export default Calculator

const styles = StyleSheet.create({

    formContainer :{
        margin: 30,
      },
    
      container:{
        marginVertical: 11
      },
    
      text: {
        color:'black',
        fontSize: 15
      },
    
      input: {
        color:'black',
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginBottom: 10,
        borderRadius: 10
      },
      
      buttonContainer: {
        marginVertical: 20,
        height: 50,
      },
      button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 10,
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
      },
})