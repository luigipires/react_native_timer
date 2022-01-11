import React from 'react';
import { Text, Picker, View } from 'react-native';

import styles from '../css/StyleSheet';

export default function ContentAlarm(props){
    return(
        <View style={{alignItems: 'center'}}>
            <Text style={{...styles.text, fontSize: 30, paddingBottom: 50}}>Selecione seu tempo</Text>
  
            <View style={{flexDirection: 'row'}}>
                <Text style={{...styles.text, fontSize: 15, paddingBottom: 20, paddingRight: 20}}>Minutos:</Text>
                <Text style={{...styles.text, fontSize: 15, paddingBottom: 20, paddingRight: 20}}>Segundos:</Text>
            </View>
            

            <View style={{flexDirection: 'row', marginBottom: 20}}>
                <Picker selectedValue={props.minutes} onValueChange={(val) => props.setMinutes(val)} style={{width: 100, height: 50, color: 'white', fontSize: 22}}>
                {
                    props.numbers.map((val) => {
                        return(
                            <Picker.Item label={props.format(val.toString())} value={props.format(val.toString())} />
                        );
                    })
                }
                </Picker>

                <Picker selectedValue={props.seconds} onValueChange={(val) => props.setSeconds(val)} style={{width: 100, height: 50, color: 'white', fontSize: 22}}>
                {
                    props.numbers.map((val) => {
                        return(
                            <Picker.Item label={props.format(val.toString())} value={props.format(val.toString())} />
                        );
                    })
                }
                </Picker>
            </View>
        </View>
    );
}