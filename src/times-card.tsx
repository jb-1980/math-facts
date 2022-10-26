import { FactCard } from "./components/fact-card"
import { Factor } from "./components/factor"
import { Times } from "./components/times"
import { AnswerCard } from "./components/answer-card"
import { FlashCard } from "./components/flash-card"
import { useState } from "react"
import { TMathFact } from "./types"
import { CorrectButton, IncorrectButton } from "./components/answer-buttons"
import { useGlobalContext } from "./context"

export const TimesCard = ({
  mathFact,
  nextCard,
}: {
  mathFact: TMathFact
  nextCard: (id: string) => void
}) => {
  const [showAnswer, setShowAnswer] = useState(false)
  const { dispatch } = useGlobalContext()
  return (
    <FlashCard
      flipped={showAnswer}
      onClick={() => setShowAnswer((bool) => !bool)}
      multiply
    >
      <FactCard multiply>
        <Factor gridArea="f1">{mathFact.factor1}</Factor>
        <Times>×</Times>
        <Factor gridArea="f2"> {mathFact.factor2}</Factor>
        <hr
          style={{
            border: "thick solid white",
            margin: 5,
            gridArea: "a",
            alignSelf: "start",
          }}
        />
      </FactCard>
      <AnswerCard showAnswer={showAnswer} multiply>
        <div>{showAnswer && mathFact.answer}</div>
        <div style={{ display: "flex", gap: 50 }}>
          <IncorrectButton
            onClick={() => {
              dispatch({ type: "incorrect" })
              nextCard(mathFact.id)
            }}
          >
            X
          </IncorrectButton>
          <CorrectButton
            onClick={() => {
              dispatch({ type: "correct" })
              nextCard(mathFact.id)
            }}
          >
            ✔
          </CorrectButton>
        </div>
      </AnswerCard>
    </FlashCard>
  )
}
