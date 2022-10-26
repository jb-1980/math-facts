import { createContext, useContext, useReducer } from "react"
import { Action, State, TContext } from "./types"

const Context = createContext<TContext | undefined>(undefined)

export const FACTORS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const defaultState: State = {
  answersCorrect: 0,
  answersIncorrect: 0,
  problemsRemaining: 144,
  practiceSet: [...FACTORS],
  lang: "en",
  operation: "times",
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "correct":
      return {
        ...state,
        answersCorrect: state.answersCorrect + 1,
        problemsRemaining: state.problemsRemaining - 1,
      }
    case "incorrect":
      return {
        ...state,
        answersIncorrect: state.answersIncorrect + 1,
        problemsRemaining: state.problemsRemaining - 1,
      }
    case "reset":
      return defaultState
    case "setPracticeSet": {
      const num = action.payload
      let nextPracticeSet: number[] = []
      if (!num) {
        // remove filter
        nextPracticeSet = [...FACTORS]
      } else if (state.practiceSet.length === 12) {
        nextPracticeSet = [num]
      } else if (state.practiceSet.includes(num)) {
        nextPracticeSet = state.practiceSet.filter((n) => n !== num)
      } else {
        nextPracticeSet = [...state.practiceSet, num]
      }

      return {
        ...state,
        practiceSet: nextPracticeSet,
        problemsRemaining: nextPracticeSet.length * 12,
        answersCorrect: 0,
        answersIncorrect: 0,
      }
    }
    case "setLanguage":
      return { ...state, lang: action.payload }
    case "setOperation":
      return { ...state, operation: action.payload }
    default:
      return state
  }
}

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  return (
    <Context.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useGlobalContext = () => {
  const context = useContext(Context)
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a Provider")
  }
  return context
}
