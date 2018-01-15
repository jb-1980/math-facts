import React from "react"
import { StyleSheet, css } from "aphrodite"

import langStrings from "./lang"

const styles = StyleSheet.create({
  numContainer: {
    display: "grid",
    gridTemplateColumns: "75px 75px 75px 75px",
    gridTemplateRows: "75px 75px 75px 75px 75px 75px",
    alignItems: "center",
    justifyItems: "center",
    width: 300,
    position: "absolute",
    top: 0,
    borderRight: "3px solid #3d3d3d",
    height: "100%",
    paddingTop: 50,
    transition: "0.9s",
    background: "#fff",
  },
  removeFilters: {
    gridColumn: "1 / 5",
    height: 50,
    width: 275,
    border: "3px solid #3d3d3d",
    borderRadius: "7px",
    display: "flex",
    alinItems: "center",
    justifyContent: "center",
    fontSize: "30px",
    lineHeight: "50px",
    cursor: "pointer",
  },
  num: {
    width: 50,
    height: 50,
    border: "3px solid #3d3d3d",
    borderRadius: 7,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    userSelect: "none",
  },
  selectors: {
    gridColumn: "span 2",
  },
  selectorButton: {
    border: "3px solid #3d3d3d",
    borderRadius: "10px",
    lineHeight: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedBackground: {
    background: "#3d3d3d",
    color: "#fff",
  },
  notSelectedBackground: {
    background: "#fff",
    color: "#3d3d3d",
  },
  menuSelector: {
    position: "absolute",
    top: 0,
    zIndex: 5,
    transition: ".9s",
  },
})

class NumberSelector extends React.Component {
  state = { sidebarOpen: false }

  toggleSidebar = () =>
    this.setState(prevState => ({ sidebarOpen: !prevState.sidebarOpen }))

  render() {
    const {
      selectSet,
      practiceSet,
      lang,
      changeLang,
      selectOperation,
      operation,
    } = this.props
    const numberNodes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(num => (
      <div
        className={css(styles.num)}
        style={{
          background: practiceSet.includes(num) ? "#3d3d3d" : "#fff",
          color: practiceSet.includes(num) ? "#fff" : "#3d3d3d",
        }}
        key={num}
        onClick={() => selectSet(num)}
      >
        {num}
      </div>
    ))
    return (
      <div>
        <div
          className={css(styles.menuSelector)}
          onClick={this.toggleSidebar}
          style={{ left: this.state.sidebarOpen ? 250 : 0 }}
        >
          <div
            style={{
              width: 35,
              height: 5,
              background: "#3d3d3d",
              margin: "6px 0",
            }}
          />
          <div
            style={{
              width: 35,
              height: 5,
              background: "#3d3d3d",
              margin: "6px 0",
            }}
          />
          <div
            style={{
              width: 35,
              height: 5,
              background: "#3d3d3d",
              margin: "6px 0",
            }}
          />
        </div>
        <div
          className={css(styles.numContainer)}
          style={{ left: this.state.sidebarOpen ? 0 : "-100%" }}
        >
          <div
            className={css(styles.removeFilters)}
            onClick={() => selectSet()}
          >
            {langStrings[lang].remove_filters}
          </div>
          {numberNodes}
          <button
            className={css(
              styles.selectors,
              styles.selectorButton,
              operation === "times"
                ? styles.selectedBackground
                : styles.notSelectedBackground
            )}
            onClick={() => selectOperation("times")}
            style={{ width: 70, fontSize: 40 }}
          >
            &times;
          </button>
          <button
            className={css(
              styles.selectors,
              styles.selectorButton,
              operation === "divide"
                ? styles.selectedBackground
                : styles.notSelectedBackground
            )}
            onClick={() => selectOperation("divide")}
            style={{ width: 70, fontSize: 40 }}
          >
            &divide;
          </button>
          <button
            className={css(
              styles.selectors,
              styles.selectorButton,
              lang === "en"
                ? styles.selectedBackground
                : styles.notSelectedBackground
            )}
            onClick={() => changeLang("en")}
          >
            English
          </button>
          <button
            className={css(
              styles.selectors,
              styles.selectorButton,
              lang === "spa"
                ? styles.selectedBackground
                : styles.notSelectedBackground
            )}
            onClick={() => changeLang("spa")}
          >
            Español
          </button>
        </div>
      </div>
    )
  }
}

export default NumberSelector
