import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from '../css/StyleSheet';

export default function ButtonAlarm(props){
    return(
        <View style={{alignItems: 'center'}}>
            <View style={{flexDirection: 'row'}}>
                {
                    props.sound.map((val, index) => {
                        if(val.selected == true){
                            return(
                            <TouchableOpacity onPress={() => props.function(index)} style={styles.alarmTrue}>
                                <Text style={{...styles.text, fontSize: 12}}>{val.name}</Text>
                            </TouchableOpacity>
                            );
                        }else{
                            return(
                            <TouchableOpacity onPress={() => props.function(index)} style={styles.alarm}>
                                <Text style={{...styles.text, fontSize: 12}}>{val.name}</Text>
                            </TouchableOpacity>
                            );
                        }
                    })
                }
            </View>
    
            <View style={{marginTop: 60}}>
                <TouchableOpacity style={styles.button} onPress={() => props.setTimer('running')}>
                    <LinearGradient
                    // Background Linear Gradient
                        colors={['rgba(39, 19, 79, 0.8)', 'transparent']}
                        style={{...styles.background, borderRadius: 100}}
                    />
                    <Text style={{...styles.text, fontSize: 21, fontWeight: 'bold'}}>Iniciar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}