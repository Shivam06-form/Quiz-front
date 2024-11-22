import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Styles } from '../styles'
import { URLS } from './Url'
import { useSelector } from 'react-redux'



const { styles, deviceHeight, deviceWidth } = Styles()
const LeaderBoard = ({ result, setCheckScore }) => {
    const { URL } = URLS()
    const user = useSelector((use) => use.score)

    // const { Data } = (user.scoreData)
    const Data = (user.scoreData[0]?.Data)


    const score_board = (Data || []).map((s, i) => {
        return (
            <View key={i}
                style={[{
                    flexDirection: "row",
                    marginTop: (deviceHeight / 100) * 5,
                    justifyContent: "space-between",
                    width: (deviceWidth / 100) * 85,
                    alignSelf: "center",
                }]}
            >
                <Text style={[{ ...styles.textColor }]}>
                    {s.game}
                </Text>
                <Text style={[{ ...styles.textColor }]}>
                    {s.name}
                </Text>
                <Text style={[{ ...styles.textColor }]}>
                    {s.score}
                </Text>
            </View>
        )
    })

    return (
        <SafeAreaView>
            <View
                style={[{ ...style2.display }]}
            >
                <Text style={[{ ...styles.title },]}>
                    Score Board 📊
                </Text>
                <Text
                    onPress={() => {
                        setCheckScore(false)
                    }}
                    style={[{ ...styles.title }, {
                        backgroundColor: 'red'
                        ,
                        borderRadius: (deviceWidth / 100) * 2,
                        width: (deviceWidth / 100) * 8
                    }]}>X</Text>
            </View>
            <ScrollView>
                <View
                    style={[{ marginBottom: (deviceHeight / 100) * 8 }]}
                >
                    <View
                        style={[{ ...style2.display }]}
                    >
                        <Text style={[{ ...styles.title }]}>
                            game
                        </Text>
                        <Text style={[{ ...styles.title }]}>
                            player
                        </Text>
                        <Text style={[{ ...styles.title }]}>
                            score
                        </Text>
                    </View>
                    {score_board}

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default LeaderBoard


const style2 = StyleSheet.create({
    display: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "center",
        width: (deviceWidth / 100) * 85,
        marginTop: (deviceHeight / 100) * 2
    }
})