import React from "react"
import { StyleSheet, css } from "aphrodite"

const styles = StyleSheet.create({
  flashCard: {
    width: 300,
    height: 200,
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
    gridTemplateAreas: '"divisor dividend"',
    gridTemplateColumns: "100px 200px",
    gridTemplateRows: "200px",
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
    gridTemplateRows: "150px 50px",
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
  nomial: {
    fontSize: "5rem",
    color: "#fff",
  },
  dividend: {
    gridArea: "dividend",
    borderTop: "7px solid #fff",
    display: "flex",
    justifyContent: "start",
    marginRight: 10,
  },
  divisor: {
    gridArea: "divisor",
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

const TimesCard = ({ mathFact, nextCard, showAnswer, toggleShowAnswer }) => (
  <div
    className={css(
      showAnswer ? [styles.flashCard, styles.flipped] : styles.flashCard
    )}
    onClick={toggleShowAnswer}
  >
    <div className={css(styles.factCard)}>
      <div className={css(styles.nomial, styles.divisor)}>
        {mathFact.factor1}
      </div>
      <div className={css(styles.nomial, styles.dividend)}>
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
      </div>
    </div>
    <div
      className={css(styles.answerCard)}
      style={{ zIndex: showAnswer ? 2 : 0 }}
    >
      <div>{showAnswer && mathFact.factor2}</div>
      <button
        className={css(styles.nextCardButton)}
        onClick={() => nextCard(mathFact.id)}
      >
        Next Card
      </button>
    </div>
  </div>
)

export default TimesCard
