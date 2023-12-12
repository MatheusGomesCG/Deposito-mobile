import React, { Fragment, useEffect, useState } from 'react'
import { ScrollView, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import Balloon from './Baloon';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import storageService from '../../storageService';
import { SafeAreaView } from 'react-native-safe-area-context';
import Style from './ChatStyle'
import Socket from 'socket.io-client'

const io = Socket('http://192.168.1.11:3000')
const Chat = () => {
    const sendMessage = () => {
        io.emit('chat', {content: text, date: new Date(), sentBy: userData.name })
    }
    useEffect(() => {
        storageService.get('userData').then((userData: any) => {
            setUserData(userData)
            io.on('chat', (message) => {
                chat.messages.push(message)
                setChat({message: chat.messages})
                setText('')
            })
        })
    }, [])
    const content: any = {messages:[]}
    const [text, setText] = useState('')
    const [chat, setChat] = useState(content)
    const [userData, setUserData] = useState({name: ''})

    return (
        <Fragment>
            <ScrollView contentContainerStyle={Style.scrollViewContainer}>
                {
                    chat.messages.length > 0 ?
                        chat.message.map((m: any, index:number) => (
                            <Balloon key={index} message={m} currentUser={userData.name} />
                        )):
                        <Text style={{alignSelf: 'center', color: '#848484'}}>
                            Sem mensagens no momento
                        </Text>
                }
            </ScrollView>
            <SafeAreaView>
                <View style={Style.messageTextInputContainer}>
                    <TextInput
                    style={Style.messageTextInputContainer}
                    placeholder="Digite sua mensagem..."
                    placeholderTextColor={Colors.light}
                    value={text}
                    multiline
                    onChangeText={(message) => setText(message)}
                    />
                    <TouchableOpacity
                    style={Style.sendButton}
                    disabled={!text}
                    onPress={() => sendMessage()}>
                    <Text style={{color: Colors.white}}>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </Fragment>
    );
};

export default Chat