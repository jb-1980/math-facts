import React from "react"
import PropTypes from "prop-types"

class FlashCard extends React.Component {
  state = {
    showAnswer: false,
  }

  toggleShowAnswer = () =>
    this.setState(({ showAnswer }) => ({
      showAnswer: !showAnswer,
    }))

  render() {
    return this.props.render({
      showAnswer: this.state.showAnswer,
      toggleShowAnswer: this.toggleShowAnswer,
    })
  }
}

export default FlashCard
