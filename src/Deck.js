import React from "react"
import PropTypes from "prop-types"
import uuidV4 from "uuid/v4"
import { StyleSheet, css } from "aphrodite"

import FlashCard from "./FlashCard"

const factors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const styles = StyleSheet.create({
  flipContainer: {
    perspective: 1000,
    width: 200,
    marginBottom: 20,
  },
})

class Deck extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      factors: factors.reduce((acc, factor) => {
        this.props.practiceSet.forEach(f => {
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
  }

  componentWillReceiveProps(nextProps) {
    const { practiceSet } = nextProps
    this.setState({
      factors: factors.reduce((acc, factor) => {
        practiceSet.forEach(f => {
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

  nextCard = id => {
    this.setState(prevState => ({
      factors: prevState.factors.filter(f => f.id !== id),
    }))
  }

  render() {
    const mathFact =
      this.state.factors.length > 0
        ? this.state.factors[
            Math.floor(Math.random() * this.state.factors.length)
          ]
        : null

    return (
      <div className={css(styles.flipContainer)}>
        <div>{this.state.factors.length} cards remaining</div>
        {mathFact ? (
          <FlashCard nextCard={this.nextCard} mathFact={mathFact} />
        ) : (
          <div
            style={{
              width: 200,
              height: 300,
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
