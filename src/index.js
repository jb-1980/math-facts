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
  state = { practiceSet: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }

  selectSet = num =>
    this.setState(prevState => {
      if (!num) {
        // remove filter
        return { practiceSet: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }
      }
      const { practiceSet } = prevState
      if (practiceSet.length === 12) {
        return { practiceSet: [num] }
      }
      if (practiceSet.includes(num)) {
        return { practiceSet: practiceSet.filter(n => n !== num) }
      }
      return { practiceSet: [...practiceSet, num] }
    })

  render() {
    return (
      <div style={styles}>
        <Deck practiceSet={this.state.practiceSet} />
        <NumberSelector
          selectSet={this.selectSet}
          practiceSet={this.state.practiceSet}
        />
      </div>
    )
  }
}
render(<App />, document.getElementById("root"))
