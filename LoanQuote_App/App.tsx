import React  from 'react';
import {StyleSheet, View, Text, SafeAreaView, StatusBar} from 'react-native';
import colors from './colors'
import Form from './Form';




export default function App() {
  return(
    <>
      <StatusBar barStyle='dark-content'/>
   
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background}></View>
      <Text style={styles.titleApp}> Formulario Head </Text>
      <Form/>
     </SafeAreaView>

     <View>
       <Text>Resultados</Text>
      </View>
     
      <View>
       <Text>Footer</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({

  safeArea: {
    
    height: 290,
    alignItems: 'center',
   

  },

  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },


  titleApp: {

    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,

  },
  
});
