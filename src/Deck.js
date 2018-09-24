import React from "react"
import PropTypes from "prop-types"
import uuidV4 from "uuid/v4"
import { StyleSheet, css } from "aphrodite"

import FlashCard from "./FlashCard"
import TimesCard from "./TimesCard"
import DivisionCard from "./DivisionCard"
import langStrings from "./lang"

const factors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const styles = StyleSheet.create({
  timesflipContainer: {
    perspective: 1000,
    width: 200,
    marginBottom: 20,
  },
  divideFlipContainer: {
    perspective: 1000,
    width: 300,
    marginBottom: 20,
  },
})

class Deck extends React.Component {
  state = {
    factors: factors.reduce((acc, factor) => {
      this.props.defaultPracticeSet.forEach(f => {
        acc.push({
          factor1: f,
          factor2: factor,
          answer: factor * f,
          correct: null,
          id: uuidV4(),
        })
      })
      return acc
    }, []),
  }

  componentDidUpdate({ defaultPracticeSet }) {
    if (defaultPracticeSet !== this.props.defaultPracticeSet) {
      this.setState({
        factors: factors.reduce((acc, factor) => {
          this.props.defaultPracticeSet.forEach(f => {
            acc.push({
              factor1: f,
              factor2: factor,
              answer: factor * f,
              correct: null,
              id: uuidV4(),
            })
          })
          return acc
        }, []),
      })
    }
  }

  nextCard = id => {
    this.setState(({ factors }) => ({
      factors: factors.filter(f => f.id !== id),
    }))
  }

  render() {
    const currentCard =
      this.state.factors.length > 0
        ? this.state.factors[
            Math.floor(Math.random() * this.state.factors.length)
          ]
        : null

    const { lang, operation } = this.props

    return (
      <div
        className={css(
          operation === "times"
            ? styles.timesFlipContainer
            : styles.divideFlipContainer
        )}
      >
        <div>{`${this.state.factors.length} ${
          langStrings[lang].cards_remaining
        }`}</div>
        {currentCard ? (
          <FlashCard
            render={({ showAnswer, toggleShowAnswer }) =>
              operation === "times" ? (
                <TimesCard
                  mathFact={currentCard}
                  nextCard={this.nextCard}
                  showAnswer={showAnswer}
                  toggleShowAnswer={toggleShowAnswer}
                />
              ) : (
                <DivisionCard
                  mathFact={currentCard}
                  nextCard={this.nextCard}
                  showAnswer={showAnswer}
                  toggleShowAnswer={toggleShowAnswer}
                />
              )
            }
          />
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
      </div>
    )
  }
}

export default Deck
