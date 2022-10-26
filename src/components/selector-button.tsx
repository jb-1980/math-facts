import styled from "@emotion/styled"

export const SelectorButton = styled.button<{ selected: boolean }>`
  grid-column: span 2;
  border: 3px solid #3d3d3d;
  border-radius: 10px;
  line-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.selected ? "#3d3d3d" : "#fff")};
  color: ${(props) => (props.selected ? "#fff" : "#3d3d3d")};
`
