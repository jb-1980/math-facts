import styled from "@emotion/styled"

export const FactCard = styled.div<{ multiply?: true }>`
  display: grid;
  grid-template-areas: ${(props) =>
    props.multiply ? '"t f1" "t f2" "a a"' : '"divisor dividend"'};
  grid-template-columns: ${(props) =>
    props.multiply ? "50px 150px" : "100px 200px"};
  grid-template-rows: ${(props) =>
    props.multiply ? "110px 110px 80px" : "200px"};
  align-items: center;
  backface-visibility: hidden;
  position: absolute;
  top: 0px;
  left: 0px;
  transform: rotateY(0deg);
  background: #3d3d3d;
`
