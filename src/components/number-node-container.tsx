import styled from "@emotion/styled"

export const NumberNodeContainer = styled.div<{ open: boolean }>`
  display: grid;
  grid-template-columns: 75px 75px 75px 75px;
  grid-template-rows: 75px 75px 75px 75px 75px 75px;
  align-items: center;
  justify-items: center;
  width: 300px;
  position: absolute;
  top: 0px;
  border-right: 3px solid #3d3d3d;
  height: 100%;
  padding-top: 50px;
  transition: 0.9s;
  background: #fff;
  left: ${(props) => (props.open ? 0 : "-100%")};
`
