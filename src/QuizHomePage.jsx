import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Quizzes from './Quizzes'
import { useSelector } from 'react-redux'
import QuizResult from './QuizResult'
import { URLS } from './Url'
import LeaderBoard from './LeaderBoard'

const QuizHomePage = () => {

    const [CheckResult, setCheckResult] = useState(false)
    const [CheckScore, setCheckScore] = useState(false)
    const [result, setResult] = useState(0)

    return (
        <View style={{ flex: 1 }}>
            {!CheckResult && !CheckScore && < Quizzes CheckResult={CheckResult}
                result={result}
                setCheckResult={setCheckResult} />}
            {CheckResult && !CheckScore && <QuizResult setCheckResult={setCheckResult}
                CheckScore={CheckScore} setCheckScore={setCheckScore}
                result={result} setResult={setResult}
            />}
            {CheckScore && <LeaderBoard
                result={result} setResult={setResult}
                CheckScore={CheckScore} setCheckScore={setCheckScore} />}
        </View>
    )
}

export default QuizHomePage