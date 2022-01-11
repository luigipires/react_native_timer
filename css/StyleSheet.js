import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#392c54',
      alignItems: 'center',
      paddingTop: 160
    },
    background: {
      position: 'absolute',
      top: 0,
      left: 0,
      right:0,
      height: '100%'
    },
    text: {
      textAlign: 'center',
      color: 'white',
      fontFamily: 'Montserrat_400Regular'
    },
    alarm: {
      padding: 20,
      backgroundColor: 'rgba(3, 4, 22, 0.2)',
      borderRadius: 10,
      marginRight: 10,
    },
    alarmTrue:{
      padding: 20,
      backgroundColor: 'rgba(3, 4, 22, 0.4)',
      borderRadius: 10,
      marginRight: 10,
      borderWidth: 1,
      borderColor: 'white'
    },
    button: {
      backgroundColor: '#7a63a8',
      width: 200,
      borderRadius: 100,
      height: 200,
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: 'white'
    }
});