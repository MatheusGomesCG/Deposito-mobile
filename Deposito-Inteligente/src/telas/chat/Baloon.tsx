import React from 'react';
import {StyleSheet, Text, View} from 'react-native'
import {Colors} from 'react-native/Libraries/NewAppScreen'

const styles = StyleSheet.create({
    bubleWrapper: {
        flexDirection: 'column',
    },
    bubbleWrapperSent: {
        alignSelf: 'flex-end',
        marginLeft: 40,
    },
    bublleWrapperReceived: {
        alignSelf: 'flex-start',
        marginRight: 40,
    },
    balloon: {
        padding: 8,
        borderRadius: 16
    },
    balloonSent: {
        backgroundColor: Colors.primary,
    },
    balloonReceived: {
        backgroundColor: Colors.white,
    },
    balloonText: {
        fontSize: 18,
    },
    ballonTextSent: {
        color: Colors.white
    },
    balloonTextReceived: {
        color: Colors.black
    }
})

const Balloon = ({message, currentUser}: any) => {
    const sent = currentUser === message.sentBy;
    const balloonColor = sent ? styles.balloonSent : styles.balloonReceived;
    const balloonTextColor = sent
     ? styles.ballonTextSent
     : styles.balloonTextReceived;
    const bublleWrapper = sent
     ? styles.bubbleWrapperSent
     : styles.bublleWrapperReceived;

     if(message) {
        return (
            <View style={{marginBottom: '2%'}}>
                <View style={{...styles.bubleWrapper, ...bublleWrapper}}>
                    <View style={{...styles.ballonTextSent, ...balloonColor}}>
                        <Text>
                            {message.sentBy}
                        </Text>
                        <Text style={{...styles.balloonText, ...balloonTextColor}}>
                            {message.content}
                        </Text>
                    </View>
                </View>
            </View>

        )
     } else {
        return <></>
     }
}

export default Balloon