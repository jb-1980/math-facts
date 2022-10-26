import React from "react"
import * as ReactDOM from "react-dom/client"
import { Provider } from "./context"

import { Deck } from "./deck"
import { NumberSelector } from "./number-selector"

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
} as const

const App = () => (
  <div style={styles}>
    <Provider>
      <Deck />
      <NumberSelector />
    </Provider>
  </div>
)

const container = document.getElementById("root") as HTMLElement
const root = ReactDOM.createRoot(container)

root.render(<App />)
