import { FlashCard } from "./components/flash-card"
import { FactCard } from "./components/fact-card"
import { AnswerCard } from "./components/answer-card"
import { NextCardButton } from "./components/next-card-button"
import { Factor } from "./components/factor"
import { useState } from "react"
import { TMathFact } from "./types"

export const DivisionCard = ({
  mathFact,
  nextCard,
}: {
  mathFact: TMathFact
  nextCard: (id: string) => void
}) => {
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
        <NextCardButton onClick={() => nextCard(mathFact.id)}>
          Next Card
        </NextCardButton>
      </AnswerCard>
    </FlashCard>
  )
}
