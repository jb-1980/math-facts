export type TMathFact = {
  id: string
  factor1: number
  factor2: number
  answer: number
  correct: boolean | null
}

export type TLanguages = "en" | "spa"

export type TOperation = "times" | "divide"
export type State = Omit<TContext, "dispatch">
export type Action =
  | { type: "correct" }
  | { type: "incorrect" }
  | { type: "reset" }
  | { type: "setLanguage"; payload: TLanguages }
  | { type: "setOperation"; payload: TOperation }
  | { type: "setPracticeSet"; payload: number | undefined }

export type TContext = {
  answersCorrect: number
  answersIncorrect: number
  problemsRemaining: number
  practiceSet: number[]
  lang: TLanguages
  operation: TOperation
  dispatch: React.Dispatch<Action>
}
