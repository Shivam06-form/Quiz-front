import React, { useEffect, useState } from 'react'
import { SafeAreaView, SafeAreaViewBase, StyleSheet, Text, View } from 'react-native'
import { URLS } from './Url'
import { Styles } from '../styles'
import CustomButton from './Common/CustomButton'
import { useDispatch, useSelector } from 'react-redux'
import { ANSWERS, CORRECT, SCORE } from './Redux'


const { styles, deviceHeight, deviceWidth } = Styles()
const Quizzes = ({ CheckResult, setCheckResult, result }) => {
    const { URL } = URLS()
    const [Data, setData] = useState()
    const [Qns_num, setQns_num] = useState(0)
    const [answer, setAnswer] = useState(null)
    const dispatch = useDispatch();
    const [qns_length, setqns_length] = useState(0)
    const name = useSelector((use) => use.login)
    const questions = async () => {
        const res = await fetch(`${URL}quizzes`)
        const data = await res.json()
        const { questions } = (data.Data)
        setData(questions[Qns_num])
        setqns_length(questions.length)
    }

    useEffect(() => {
        questions()
    }, [Data?.question, Qns_num])



    const Calculate_Score = async () => {
        console.log({
            score: result,
            name: name.name
        })
        await fetch(`${URL}score`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': "application/json"
            }, body: JSON.stringify({
                score: result,
                name: name.name
            })
        }).then(async (res) => {
            const data = await res.json()

            dispatch(SCORE({ data: data }))

            if (data.Data === 'success') {

            }
        })
    }


    return (
        <SafeAreaView>
            <View style={{ height: (deviceHeight / 100) * 85, width: deviceWidth, }}>
                <View style={style2.questionOverlay}>
                    <Text style={[{ ...styles.title }, { width: (deviceWidth / 100) * 80, alignSelf: "center" }]}>{Data?.question}</Text>
                    <View style={[{ ...style2.answers_overlay }]}>
                        {Data?.answers.map((ans2, i) => {
                            return (

                                <Text
                                    key={i}
                                    disabled={answer !== null}
                                    onPress={() => {
                                        setAnswer(ans2)
                                        if (Data?.correct_answer === ans2) {
                                            dispatch(ANSWERS({ ans: Data }))
                                        }

                                    }}
                                    style={[{ ...styles.title }, { ...style2.answers }, {
                                        backgroundColor: `${((answer) && (Data?.correct_answer === ans2)) ? "green" : "blue"}`
                                    }]}>
                                    {ans2}
                                </Text>

                            )
                        })}
                    </View>

                    {answer && qns_length - 1 !== Qns_num && <CustomButton Title={"Next"}
                        onPress={() => {
                            console.log("next")
                            setQns_num(Qns_num + 1)
                            setAnswer(null)
                        }}
                        custmStyle={{ backgroundColor: "green", marginLeft: "auto" }}
                    />}

                    {qns_length - 1 === Qns_num && <CustomButton
                        Title={'final Qns'}
                        custmStyle={{ backgroundColor: "green", marginLeft: "auto" }}

                        onPress={() => {
                            Calculate_Score()
                            setCheckResult(true)
                        }}
                    />}

                </View>

                {answer && <Text

                    style={[{ ...styles.title }, {
                        ...style2.answers
                    }, { backgroundColor: 'lightgreen', marginTop: (deviceHeight / 100) * 4 }]}>{Data?.explanation}</Text>}

            </View>
        </SafeAreaView>
    )
}

export default Quizzes

const style2 = StyleSheet.create({
    questionOverlay: {
        // backgroundColor: "lightblue",
        height: (deviceHeight / 100) * 55,
        margin: "auto",

    },

    answers_overlay: {
        height: (deviceHeight / 100) * 35,
        justifyContent: "space-between",
        margin: "auto",
    },


    answers: {
        width: (deviceWidth / 100) * 85,
        backgroundColor: "blue",
        borderRadius: (deviceWidth / 100) * 5,
        color: "white",
        padding: (deviceWidth / 100) * 2,
        alignSelf: "center",
        borderStyle: "solid",
        borderBottomWidth: (deviceHeight / 100) * 0.6,
        borderColor: "lightgreen"
    }
})