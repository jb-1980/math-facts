import { FlashCard } from "./components/flash-card"
import { FactCard } from "./components/fact-card"
import { AnswerCard } from "./components/answer-card"
import { Factor } from "./components/factor"
import { useState } from "react"
import { TMathFact } from "./types"
import { CorrectButton, IncorrectButton } from "./components/answer-buttons"
import { useGlobalContext } from "./context"

export const DivisionCard = ({
  mathFact,
  nextCard,
}: {
  mathFact: TMathFact
  nextCard: (id: string) => void
}) => {
  const { dispatch } = useGlobalContext()
  const [showAnswer, setShowAnswer] = useState(false)
  return (
    <FlashCard
      flipped={showAnswer}
      onClick={() => setShowAnswer((bool) => !bool)}
    >
      <FactCard>
        <Factor gridArea="divisor">{mathFact.factor1}</Factor>
        <Factor gridArea="dividend">
          <div
            style={{
              marginRight: "10px",
              position: "relative",
              top: "-1.15rem",
              left: "-0.3rem",
            }}
          >
            )
          </div>
          <div style={{ margin: "auto" }}>{mathFact.answer}</div>
        </Factor>
      </FactCard>
      <AnswerCard showAnswer={showAnswer}>
        <div>{showAnswer && mathFact.factor2}</div>
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
