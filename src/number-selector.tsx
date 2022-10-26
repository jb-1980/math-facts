import React from "react"

import langStrings from "./lang"
import { NumberNode } from "./components/number-node"
import { Hamburger } from "./components/hamburger"
import { NumberNodeContainer } from "./components/number-node-container"
import { RemoveFiltersButton } from "./components/remove-filters-button"
import { SelectorButton } from "./components/selector-button"
import { FACTORS, useGlobalContext } from "./context"

export const NumberSelector = () => {
  const { practiceSet, dispatch, lang, operation } = useGlobalContext()
  const [sidebarOpen, setSidebarOpen] = React.useState(false)

  const numberNodes = FACTORS.map((num) => (
    <NumberNode
      selected={practiceSet.includes(num)}
      key={num}
      onClick={() => dispatch({ type: "setPracticeSet", payload: num })}
    >
      {num}
    </NumberNode>
  ))
  return (
    <div>
      <Hamburger
        open={sidebarOpen}
        onClick={() => setSidebarOpen((prevState) => !prevState)}
      />
      <NumberNodeContainer open={sidebarOpen}>
        <RemoveFiltersButton
          onClick={() =>
            dispatch({ type: "setPracticeSet", payload: undefined })
          }
        >
          {langStrings[lang].remove_filters}
        </RemoveFiltersButton>
        {numberNodes}
        <SelectorButton
          selected={operation === "times"}
          onClick={() => dispatch({ type: "setOperation", payload: "times" })}
          style={{ width: 70, fontSize: 40 }}
        >
          &times;
        </SelectorButton>
        <SelectorButton
          selected={operation === "divide"}
          onClick={() => dispatch({ type: "setOperation", payload: "divide" })}
          style={{ width: 70, fontSize: 40 }}
        >
          &divide;
        </SelectorButton>
        <SelectorButton
          selected={lang === "en"}
          onClick={() => dispatch({ type: "setLanguage", payload: "en" })}
        >
          English
        </SelectorButton>
        <SelectorButton
          selected={lang === "spa"}
          onClick={() => dispatch({ type: "setLanguage", payload: "spa" })}
        >
          Español
        </SelectorButton>
      </NumberNodeContainer>
    </div>
  )
}

export default NumberSelector
