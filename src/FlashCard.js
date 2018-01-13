import React from "react"
import PropTypes from "prop-types"
import { StyleSheet, css } from "aphrodite"

const styles = StyleSheet.create({
  flashCard: {
    width: 200,
    height: 300,
    margin: "auto",
    cursor: "pointer",
    userSelect: "none",
    transition: "0.6s",
    transformStyle: "preserve-3d",
    position: "relative",
    borderRadius: "2px",
  },
  factCard: {
    display: "grid",
    gridTemplateAreas: '"t f1""t f2""a a"',
    gridTemplateColumns: "50px 150px",
    gridTemplateRows: "110px 110px 80px",
    alignItems: "center",
    backfaceVisibility: "hidden",
    position: "absolute",
    top: 0,
    left: 0,
    transform: "rotateY(0deg)",
    background: "#3d3d3d",
  },
  answerCard: {
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    gridTemplateRows: "250px 50px",
    background: "#3d3d3d",
    fontSize: "6rem",
    color: "#fff",
    height: "100%",
    width: "100%",
    backfaceVisibility: "hidden",
    position: "absolute",
    top: 0,
    left: 0,
    transform: "rotateY(180deg)",
  },
  inFront: {
    zIndex: 2,
  },
  factor: {
    fontSize: "5rem",
    color: "#fff",
  },
  factor1: {
    gridArea: "f1",
  },
  factor2: {
    gridArea: "f2",
  },
  times: {
    gridArea: "t",
    alignSelf: "end",
    fontSize: "6.5rem",
  },
  nextCardButton: {
    background: "#fff",
    height: "45px",
    fontSize: "20px",
    border: "3px solid black",
    borderRadius: "10px",
  },
  flipped: {
    transform: "rotateY(180deg)",
  },
})

class FlashCard extends React.Component {
  state = { showAnswer: false }

  toggleShowAnswer = () => {
    this.setState(previousState => ({ showAnswer: !previousState.showAnswer }))
  }
  render() {
    const { mathFact, nextCard } = this.props
    return (
      <div
        className={css(
          this.state.showAnswer
            ? [styles.flashCard, styles.flipped]
            : styles.flashCard
        )}
        onClick={this.toggleShowAnswer}
      >
        <div className={css(styles.factCard)}>
          <div className={css(styles.factor, styles.factor1)}>
            {mathFact.factor1}
          </div>
          <div className={css(styles.factor, styles.times)}>×</div>
          <div className={css(styles.factor, styles.factor2)}>
            {mathFact.factor2}
          </div>
          <hr
            style={{
              border: "thick solid white",
              margin: 5,
              gridArea: "a",
              alignSelf: "start",
            }}
          />
        </div>
        <div
          className={css(styles.answerCard)}
          style={{ zIndex: this.state.showAnswer ? 2 : 0 }}
        >
          <div>{this.state.showAnswer && mathFact.answer}</div>
          <button
            className={css(styles.nextCardButton)}
            onClick={() => nextCard(mathFact.id)}
          >
            Next Card
          </button>
        </div>
      </div>
    )
  }
}

export default FlashCard
