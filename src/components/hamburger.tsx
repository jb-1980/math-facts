import styled from "@emotion/styled"

const Slice = styled.div`
  width: 35px;
  height: 5px;
  background: #3d3d3d;
  margin: 6px 0;
`

const Selector = styled.button<{ open: boolean }>`
  position: absolute;
  top: 0;
  z-index: 5;
  transition: 0.9s;
  left: ${(props) => (props.open ? 250 : 0)}px;
`

export const Hamburger = ({
  onClick,
  open,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  open: boolean
}) => (
  <Selector open={open} onClick={onClick}>
    <Slice />
    <Slice />
    <Slice />
  </Selector>
)
