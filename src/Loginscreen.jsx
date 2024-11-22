import React, { useState } from 'react'
import { Button, Image, StyleSheet, Text, TextInput, View, } from 'react-native'
import { Styles } from '../styles'
import { URLS } from './Url'
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN } from './Redux';
import image from '../src/Images/qns.webp'

const { styles, deviceHeight, deviceWidth } = Styles()
const Loginscreen = () => {
    const { URL } = URLS()
    const dispatch = useDispatch()


    const [User_Name, setUser_Name] = useState("")


    const create_user = async () => {
        await fetch(`${URL}create`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': "application/json"
            }, body: JSON.stringify({
                name: User_Name
            })
        }).then(async (res) => {
            const data = await res.json()
            if (data.Data === 'success') {
                console.log(data.Data)
                dispatch(LOGIN({ name: User_Name, login: true }))
            }
        })
        // dispatch(LOGIN({ name: User_Name, login: true }))

    }

    return (
        <View
            style={style2.User}
        >
            <Image

                source={{
                    uri: 'https://imgs.search.brave.com/v0YX5fyui9yo27tIRDhhTYBuBcB8-dl2vTk9OK2daN0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ4/MjMzMzg1MC9waG90/by9xdWVzdGlvbi1i/dWJibGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTI2ZHR2/dW9rSFNuQ01KLWRo/bzNjcG9fX2RvTF9M/b1I2OTFDVzk4cFdZ/LTA9',
                }}
                resizeMode='contain'
                style={{
                    flex: 1,
                    width: (deviceWidth / 100) * 45,
                }}
            />

            <View
                style={{
                    marginBottom: (deviceHeight / 100) * 20
                }}
            >

                <Text
                    style={[{ ...styles.title },]} >
                    Type your name
                </Text>
                <TextInput
                    defaultValue={User_Name}
                    onChangeText={(e) => {
                        setUser_Name(e)
                    }}

                    textContentType='name' style={[{
                        borderStyle: "solid",
                        borderBottomWidth: ((deviceHeight / 100) * 0.4),
                        width: ((deviceWidth / 100) * 35),
                    }, { ...styles.textColor }]}
                    multiline={true}
                />
            </View>
            {User_Name && <View
                style={style2.button}
            >
                <Text
                    onPress={() => {
                        create_user()
                    }}
                    style={[{ ...styles.textColor }, { color: "white" }]}
                >Start Quis</Text>
            </View>}

        </View>
    )
}

export default Loginscreen


const style2 = StyleSheet.create({
    User: {
        height: (deviceHeight / 100) * 85,
        width: deviceWidth,
        alignItems: "center",
        justifyContent: "space-between",
    },
    button: {
        backgroundColor: "black",
        padding: ((deviceWidth / 100) * 2),
        borderRadius: (deviceWidth / 100) * 2,
        width: (deviceWidth / 100) * 35,
        // marginTop: "auto"
    }

})