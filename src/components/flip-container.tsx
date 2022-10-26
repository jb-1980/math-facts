import styled from "@emotion/styled"

export const FlipContainer = styled.div<{ multiply: boolean }>`
  perspective: 1000px;
  width: ${(props) => (props.multiply ? 200 : 300)}px;
  margin-bottom: 20px;
  border-radius: 10px;
`
