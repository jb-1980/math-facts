import React from "react"
import * as ReactDOM from "react-dom/client"

import { Deck } from "./deck"
import { NumberSelector } from "./number-selector"
import { TLanguages } from "./types"

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
} as const

const App = () => {
  const [practiceSet, setPracticeSet] = React.useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ])
  const [lang, setLang] = React.useState<TLanguages>("en")
  const [operation, setOperation] = React.useState("times")

  const selectSet = (num?: number) =>
    setPracticeSet((_practiceSet) => {
      if (!num) {
        // remove filter
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      }
      if (_practiceSet.length === 12) {
        return [num]
      }
      if (_practiceSet.includes(num)) {
        return _practiceSet.filter((n) => n !== num)
      }
      return [..._practiceSet, num]
    })

  return (
    <div style={styles}>
      <Deck
        defaultPracticeSet={practiceSet}
        lang={lang}
        operation={operation}
      />
      <NumberSelector
        selectSet={selectSet}
        practiceSet={practiceSet}
        lang={lang}
        changeLang={setLang}
        operation={operation}
        selectOperation={setOperation}
      />
    </div>
  )
}
const container = document.getElementById("root") as HTMLElement
const root = ReactDOM.createRoot(container)

root.render(<App />)
