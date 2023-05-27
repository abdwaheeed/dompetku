import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { Formik } from 'formik';
import { IDompetDetail, IForm } from '../../../interfaces';

const AddDompetForm = () => {
  const [formData, setFormData] = useState<IDompetDetail>({
    id: 10,
    dompetName : "",
    saldo : 0,
    deskripsi: "",
  });

  const handleSubmit = (values: IDompetDetail) => {
    console.log('submitted', values);
  };

  return (
    <View>
      <Formik initialValues={formData} onSubmit={handleSubmit}>
        {({ handleChange, handleSubmit, values }) => (
          <View style={styles.formContainer}>
            <View style={styles.container}>
              <Text style={styles.text}>Name:</Text>
              <TextInput
                value={values.dompetName}
                onChangeText={handleChange('dompetName')} // Menentukan field yang diubah
                style={styles.input}
              />
            </View>
            <View style={styles.container}>
              <Text style={styles.text}>Nominal</Text>
              <TextInput
                value={values.saldo.toString()}
                keyboardType="numeric"
                onChangeText={handleChange('saldo')} // Menentukan field yang diubah
                style={styles.input}
              />
            </View>

            <View style={styles.container}>
              <Text style={styles.text}>Deskripsi</Text>
              <TextInput
                value={values.deskripsi}
                onChangeText={handleChange('deskripsi')} // Menentukan field yang diubah
                style={styles.input}
              />
            </View>

            <View style={styles.button}>
              <Button title="Add" onPress={handleSubmit} color={"black"}/>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddDompetForm;

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
  
  button:{
    marginTop: 20
  }
});
