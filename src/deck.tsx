import { useEffect, useState } from "react"
import { v4 as uuidV4 } from "uuid"

import { TimesCard } from "./times-card"
import { DivisionCard } from "./division-card"
import { FlipContainer } from "./components/flip-container"
import { TMathFact } from "./types"
import { AccuracyBar } from "./accuracy-bar"
import { FACTORS, useGlobalContext } from "./context"
import Strings from "./lang"

export const Deck = () => {
  const { practiceSet, operation, problemsRemaining, lang } = useGlobalContext()
  const [factors, setFactors] = useState(
    FACTORS.reduce<TMathFact[]>((acc, factor) => {
      practiceSet.forEach((f) => {
        acc.push({
          factor1: f,
          factor2: factor,
          answer: factor * f,
          correct: null,
          id: uuidV4(),
        })
      })
      return acc
    }, [])
  )

  useEffect(() => {
    setFactors(
      FACTORS.reduce<TMathFact[]>((acc, factor) => {
        practiceSet.forEach((f) => {
          acc.push({
            factor1: f,
            factor2: factor,
            answer: factor * f,
            correct: null,
            id: uuidV4(),
          })
        })
        return acc
      }, [])
    )
  }, [practiceSet])

  const nextCard = (id: string) => {
    setFactors((_factors) => _factors.filter((f) => f.id !== id))
  }

  const currentCard =
    factors.length > 0
      ? factors[Math.floor(Math.random() * factors.length)]
      : null

  return (
    <FlipContainer multiply={operation === "times"}>
      <p>
        {problemsRemaining} {Strings[lang].cards_remaining}
      </p>
      <AccuracyBar />
      {currentCard ? (
        operation === "times" ? (
          <TimesCard mathFact={currentCard} nextCard={nextCard} />
        ) : (
          <DivisionCard mathFact={currentCard} nextCard={nextCard} />
        )
      ) : (
        <div
          style={{
            width: operation === "times" ? 200 : 300,
            height: operation === "times" ? 300 : 200,
            background: "#3d3d3d",
            margin: "auto",
            fontSize: "40px",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Deck Complete
        </div>
      )}
    </FlipContainer>
  )
}
