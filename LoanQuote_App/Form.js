import React  from 'react';
import {StyleSheet, View, Text, SafeAreaView, StatusBar, TextInput} from 'react-native';
import colors from './colors';
//import RNPickerSelect from 'react-native-picker-select';

export default function Form() {
    return(
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput placeholder="Cantidad a pedrir 1"
                keyboardType="numeric"
                style = {styles.input}/>

                <TextInput placeholder='Interes %'
                keyboardType="numeric"
                style={[styles.input, styles.inputPercentage]}/>

            </View>

          
        </View>
    );
}



const styles = StyleSheet.create({

    viewForm: {
        position:'absolute',
        bottom: -90,
        width:'85%',
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent: 'center',
    },
    viewInputs: {
        flexDirection: 'row',
    },

    input: {
        height: 50,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: "60%",
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: "#000",
        paddingHorizontal: 20,
    },

    inputPercentage: {
        width: '40%',
        marginLeft: 5,
    },

});

const picketSelectStyles = StyleSheet.create({

    inputIos: {
        fontSize: 16,
        paddingVertical:12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
        backgroundColor: '#fff',
        marginLeft: -5,
        marginRight: -5,

    },

    inputAndroid: {
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 0.5,
        borderColor: 'grey',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
        backgroundColor: '#fff',
        marginLeft: -5,
        marginRight: -5,

    },
  
})
   
