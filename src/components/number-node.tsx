import styled from "@emotion/styled"

export const NumberNode = styled.div<{ selected: boolean }>`
  width: 50px;
  height: 50px;
  border: 3px solid #3d3d3d;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  background: ${(props) => (props.selected ? "#3d3d3d" : "#fff")};
  color: ${(props) => (props.selected ? "#fff" : "#3d3d3d")};
`
