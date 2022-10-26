import { useEffect, useState } from "react"
import { v4 as uuidV4 } from "uuid"

import { TimesCard } from "./times-card"
import { DivisionCard } from "./division-card"
import langStrings from "./lang"
import { FlipContainer } from "./components/flip-container"
import { TLanguages, TMathFact } from "./types"

const FACTORS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export const Deck = ({
  defaultPracticeSet,
  lang,
  operation,
}: {
  defaultPracticeSet: number[]
  lang: TLanguages
  operation: string
}) => {
  const [factors, setFactors] = useState(
    FACTORS.reduce<TMathFact[]>((acc, factor) => {
      defaultPracticeSet.forEach((f) => {
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
        defaultPracticeSet.forEach((f) => {
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
  }, [defaultPracticeSet])

  const nextCard = (id: string) => {
    setFactors((_factors) => _factors.filter((f) => f.id !== id))
  }

  const currentCard =
    factors.length > 0
      ? factors[Math.floor(Math.random() * factors.length)]
      : null

  return (
    <FlipContainer multiply={operation === "times"}>
      <div>{`${factors.length} ${langStrings[lang].cards_remaining}`}</div>
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
