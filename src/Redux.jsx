import { configureStore, createSlice } from "@reduxjs/toolkit"

let initial = {
    login: false,
    name: ''
}


const Login_Slice = createSlice({
    'name': "LOGIN",
    initialState: initial,

    reducers: {
        LOGIN(state, action) {
            const { name } = action.payload
            state.login = true,
                state.name = name
        }
    }
})

export const { LOGIN } = Login_Slice.actions



const correct_answer = createSlice({
    'name': "CORRECT",
    initialState: { ans: [] },
    reducers: {
        ANSWERS(state, action) {
            const { ans } = action.payload
            state.ans = [...state.ans, ans]
        }
    }
})

export const { ANSWERS } = correct_answer.actions




const score = createSlice({
    name: "SCORE",
    initialState: {
        scoreData: []
    }
    , reducers: {
        SCORE(state, action) {
            const { data } = action.payload
            state.scoreData = [data]
        }
    }
})
export const { SCORE } = score.actions


export const store = configureStore({
    reducer: {
        login: Login_Slice.reducer,
        answers: correct_answer.reducer,
        score: score.reducer,
    }
})