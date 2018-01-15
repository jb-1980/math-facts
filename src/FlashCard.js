import React from "react"
import PropTypes from "prop-types"

import TimesCard from "./TimesCard"
import DivisionCard from "./DivisionCard"

class FlashCard extends React.Component {
  state = { showAnswer: false }

  toggleShowAnswer = () => {
    this.setState(previousState => ({ showAnswer: !previousState.showAnswer }))
  }

  render() {
    const { mathFact, nextCard, operation } = this.props
    return operation === "times" ? (
      <TimesCard
        mathFact={mathFact}
        nextCard={nextCard}
        showAnswer={this.state.showAnswer}
        toggleShowAnswer={this.toggleShowAnswer}
      />
    ) : (
      <DivisionCard
        mathFact={mathFact}
        nextCard={nextCard}
        showAnswer={this.state.showAnswer}
        toggleShowAnswer={this.toggleShowAnswer}
      />
    )
  }
}

export default FlashCard
