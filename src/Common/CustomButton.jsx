import React from 'react'
import { Text, View } from 'react-native'
import { Styles } from '../../styles'


const { styles, deviceHeight, deviceWidth } = Styles()
const CustomButton = ({ onPress, Title, custmStyle }) => {
    return (
        <View
            style={[{ ...styles.button }, { ...custmStyle }]}
        >
            <Text
                onPress={onPress}
                style={[{ ...styles.textColor }, { color: "white", fontSize: (deviceWidth / 100) * 4 }]}
            >{Title}</Text>
        </View>
    )
}

export default CustomButton