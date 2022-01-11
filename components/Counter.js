import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Audio } from 'expo-av';

import styles from '../css/StyleSheet';

export default function Counter(props){
    const [done, setDone] = useState(false);

    useEffect(() => {
        const count = setInterval(() => {
            props.setSeconds(props.format(props.seconds - 1));

            if(props.seconds <= '00'){
                if(props.minutes > '00'){
                    props.setMinutes(props.format(props.minutes - 1));
                    props.setSeconds(59);
                }else{
                    playAlarm();
                    props.setMinutes('00');
                    props.setSeconds('00');
                    setDone(true);
                }
            }
        }, 1000);

        return () => clearInterval(count);
    });

    const playAlarm = async () => {
        const soundAlarm = new Audio.Sound();

        try{
            let fileSound = null;

            props.sound.map((data) => {
                if(data.selected == true){
                    fileSound = data.file;
                }
            })

            await soundAlarm.loadAsync(fileSound);
            await soundAlarm.playAsync();
        }catch (error){
            if(error){
                console.log(error);
            }
        }
    };

    function reset(){
        props.setMinutes('00');
        props.setSeconds('01');
        props.setTimer('stopped');
        setDone(false);
    }

    return(
        <View style={{...styles.container, justifyContent: 'center', paddingTop: 0, alignItems: 'center'}}>
            <StatusBar hidden />

            <LinearGradient
                // Background Linear Gradient
                colors={['rgba(3, 4, 22, 0.9)', 'transparent']}
                style={styles.background}
            />
            
            <Text style={{...styles.text, 
                fontSize: 50, 
                fontWeight: 'bold'}}>{props.minutes}:{props.seconds}</Text>

            <TouchableOpacity onPress={() => reset()} style={{...styles.button, marginTop: 80}}>
                <LinearGradient
                // Background Linear Gradient
                colors={['rgba(39, 19, 79, 0.8)', 'transparent']}
                style={{...styles.background, borderRadius: 100}}
                />
                
                {
                    (done == false) ? 
                        <Text style={{...styles.text, fontSize: 19, fontWeight: 'bold'}}>Resetar timer</Text>
                    :
                        <Text style={{...styles.text, fontSize: 19, fontWeight: 'bold'}}>Voltar</Text>
                }
            </TouchableOpacity>
        </View>
    );
}