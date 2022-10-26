import React from "react"

import langStrings from "./lang"
import { NumberNode } from "./components/number-node"
import { Hamburger } from "./components/hamburger"
import { NumberNodeContainer } from "./components/number-node-container"
import { RemoveFiltersButton } from "./components/remove-filters-button"
import { TLanguages } from "./types"
import { SelectorButton } from "./components/selector-button"

export const NumberSelector = ({
  selectSet,
  practiceSet,
  lang,
  changeLang,
  selectOperation,
  operation,
}: {
  selectSet: (num?: number) => void
  practiceSet: number[]
  lang: TLanguages
  changeLang: (lang: TLanguages) => void
  selectOperation: (operation: string) => void
  operation: string
}) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false)

  const numberNodes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
    <NumberNode
      selected={practiceSet.includes(num)}
      key={num}
      onClick={() => selectSet(num)}
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
        <RemoveFiltersButton onClick={() => selectSet()}>
          {langStrings[lang].remove_filters}
        </RemoveFiltersButton>
        {numberNodes}
        <SelectorButton
          selected={operation === "times"}
          onClick={() => selectOperation("times")}
          style={{ width: 70, fontSize: 40 }}
        >
          &times;
        </SelectorButton>
        <SelectorButton
          selected={operation === "divide"}
          onClick={() => selectOperation("divide")}
          style={{ width: 70, fontSize: 40 }}
        >
          &divide;
        </SelectorButton>
        <SelectorButton
          selected={lang === "en"}
          onClick={() => changeLang("en")}
        >
          English
        </SelectorButton>
        <SelectorButton
          selected={lang === "spa"}
          onClick={() => changeLang("spa")}
        >
          Español
        </SelectorButton>
      </NumberNodeContainer>
    </div>
  )
}

export default NumberSelector
