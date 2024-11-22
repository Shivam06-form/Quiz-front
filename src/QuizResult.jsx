import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { Styles } from '../styles'
import { useDispatch, useSelector } from 'react-redux'
import { URLS } from './Url'
import CustomButton from './Common/CustomButton'
import { ANSWERS, SCORE } from './Redux'


const { styles, deviceHeight, deviceWidth } = Styles()
const QuizResult = ({ setCheckResult, CheckScore, setCheckScore, result, setResult }) => {
    const { URL } = URLS()
    const name = useSelector((use) => use.login)
    const user = useSelector((use) => use.answers)
    const dispatch = useDispatch()


    const Calculate_result = async ({ data }) => {
        await fetch(`${URL}quizzes/${name.name}/submit`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': "application/json"
            }, body: JSON.stringify(data)
        }).then(async (res) => {
            const data = await res.json()
            setResult(data.total)
            if (data.Data === 'success') {

            }
        })
    }


 



    return (
        <View
            style={[{ height: (deviceHeight / 100) * 65, justifyContent: "space-between", margin: "auto", width: (deviceWidth / 100) * 85 }]}
        >
            <Text style={[{ ...styles.title }]}>
                Quiz Result
            </Text>
            {result !== 0 && <Text
                style={[{ ...styles.title }, { margin: "auto", fontSize: (deviceWidth / 100) * 8 }]} >You Score is {result}</Text>}
            <CustomButton Title={"CHECK RESULT"} onPress={() => {
                Calculate_result({ data: user?.ans })

            }}
                custmStyle={{ backgroundColor: "green", margin: "auto" }}
            />
            {result !== 0 && <CustomButton Title={"Restart"} onPress={() => {
                Calculate_result({ data: user?.ans })
                setCheckResult(false)
                dispatch(ANSWERS({ ans: [] }))

            }}
                custmStyle={{ backgroundColor: "blue", margin: "auto" }}
            />}
            {result !== 0 && < CustomButton Title={"Score Board "} onPress={() => {
                setCheckScore(true)
                // Calculate_Score()
            }}
            custmStyle={{ backgroundColor: "purple", margin: "auto" }}
            />}

        </View>
    )
}

export default QuizResult