import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, View, Picker, LogBox, TouchableOpacity } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Montserrat_400Regular,
} from '@expo-google-fonts/montserrat';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './css/StyleSheet';

/*==============================================================*/

import Counter from './components/Counter';
import ButtonAlarm from './components/ButtonAlarm';
import ContentAlarm from './components/ContentAlarm';

export default function App(){
  LogBox.ignoreAllLogs();

  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('01');
  const [timer, setTimer] = useState('stopped');
  const [sound, setSound] = useState([
    {
      selected: false,
      name: 'Alarme 1',
      file: require('./audios/alarme1.mp3')
    },
    {
      selected: false,
      name: 'Alarme 2',
      file: require('./audios/alarme2.mp3')
    },
    {
      selected: false,
      name: 'Alarme 3',
      file: require('./audios/alarme3.mp3')
    }
  ]);

  /***************************************************/

  function changeSelectionAlarm(id){
    let alarm = sound.map((val, index) => {
      if(index == id){
        val.selected = true;
      }else{
        val.selected = false;
      }

      return val;
    });

    setSound(alarm);
  }

  function formatNumber(number){
    let newNumber = null;

    if(number < 10){
      newNumber = `0${number}`;
    }else{
      newNumber = `${number}`;
    }

    return newNumber;
  }

  let numbers = [];

  for (let i = 0; i <= 60; i++) {
    numbers.push(i);
  }

  /***************************************************/

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
  });

  if(!fontsLoaded){
    return <AppLoading />;
  }

  /***************************************************/

  if(timer == 'stopped'){
    return(
      <View style={styles.container}>
        <StatusBar hidden />
  
        <LinearGradient
          // Background Linear Gradient
          colors={['rgba(3, 4, 22, 0.9)', 'transparent']}
          style={styles.background}
        />
  
        <ContentAlarm
          numbers={numbers}
          format={formatNumber} 
          setMinutes={setMinutes} 
          setSeconds={setSeconds} 
          setTimer={setTimer} 
          minutes={minutes} 
          seconds={seconds}
        />
          
        <ButtonAlarm sound={sound} setTimer={setTimer} function={changeSelectionAlarm} />
      </View>
    );
  }else if(timer == 'running'){
    return(
      <Counter 
        format={formatNumber} 
        setMinutes={setMinutes} 
        setSeconds={setSeconds} 
        setTimer={setTimer} 
        minutes={minutes} 
        seconds={seconds}
        sound={sound}
      />
    );
  }
}
