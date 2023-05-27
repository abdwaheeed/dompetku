import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { IDompetDetail, IForm } from '../../../interfaces';
import { Formik } from 'formik';

type EditFormRouteParams = {
  EditForm: {
    dompet: IDompetDetail;
  };
};

const EditForm = () => {
  const route = useRoute<RouteProp<EditFormRouteParams, 'EditForm'>>();
  const { dompet } = route.params;

  const [formData, setFormData] = useState<IDompetDetail>(dompet);

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
                value={values.saldo.toLocaleString()}
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
              <Button title="Submit" onPress={handleSubmit} color={"black"}/>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default EditForm;

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