import React from "react"
import { render } from "react-dom"

import Deck from "./Deck"
import NumberSelector from "./NumberSelector"

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
}

class App extends React.Component {
  state = {
    practiceSet: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    lang: "en",
    operation: "times",
  }

  selectSet = num =>
    this.setState(({ practiceSet }) => {
      if (!num) {
        // remove filter
        return { practiceSet: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }
      }
      if (practiceSet.length === 12) {
        return { practiceSet: [num] }
      }
      if (practiceSet.includes(num)) {
        return { practiceSet: practiceSet.filter(n => n !== num) }
      }
      return { practiceSet: [...practiceSet, num] }
    })

  changeLang = lang => this.setState({ lang })

  selectOperation = operation => this.setState({ operation })

  render() {
    return (
      <div style={styles}>
        <Deck
          defaultPracticeSet={this.state.practiceSet}
          lang={this.state.lang}
          operation={this.state.operation}
        />
        <NumberSelector
          selectSet={this.selectSet}
          practiceSet={this.state.practiceSet}
          lang={this.state.lang}
          changeLang={this.changeLang}
          operation={this.state.operation}
          selectOperation={this.selectOperation}
        />
      </div>
    )
  }
}
render(<App />, document.getElementById("root"))
