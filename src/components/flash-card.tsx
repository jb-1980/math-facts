import styled from "@emotion/styled"

export const FlashCard = styled.div<{ multiply?: true; flipped: boolean }>`
  width: ${(props) => (props.multiply ? 200 : 300)}px;
  height: ${(props) => (props.multiply ? 300 : 200)}px;
  margin: auto;
  cursor: pointer;
  user-select: none;
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;
  border-radius: 10px;
  ${(props) =>
    props.flipped ? "transform: rotateY(180deg);" : "transform: rotateY(0deg);"}
`
