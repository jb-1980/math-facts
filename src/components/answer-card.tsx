import styled from "@emotion/styled"

export const AnswerCard = styled.div<{
  showAnswer: boolean
  multiply?: boolean
}>`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-rows: ${(props) =>
    props.multiply ? "250px 50px" : "150px 50px"};
  background: #3d3d3d;
  font-size: 6rem;
  color: #fff;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  transform: rotateY(180deg);
  border-radius: 10px;
  z-index: ${(props) => (props.showAnswer ? 2 : 0)};
`
