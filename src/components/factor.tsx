import { css } from "@emotion/react"
import styled from "@emotion/styled"

const dividend = css`
  grid-area: dividend;
  border-top: 7px solid #fff;
  display: flex;
  justify-content: start;
  margin-right: 10px;
`

const divisor = css`
  grid-area: divisor;
`

const f1 = css`
  grid-area: f1;
`

const f2 = css`
  grid-area: f2;
`

export const Factor = styled.div<{
  gridArea: "f1" | "f2" | "divisor" | "dividend"
}>`
  font-size: 5rem;
  color: #fff;
  ${(props) => ({ f1, f2, divisor, dividend }[props.gridArea])}
`
