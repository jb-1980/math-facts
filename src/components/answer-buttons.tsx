import styled from "@emotion/styled"

const AnswerButton = styled.button`
  height: 45px;
  width: 60px;
  font-size: 20px;
  border: 3px solid;
  border-radius: 10px;
  background-color: white;
`
export const CorrectButton = styled(AnswerButton)`
  color: #4caf50;
  border-color: #4caf50;
`

export const IncorrectButton = styled(AnswerButton)`
  color: #f44336;
  border-color: #f44336;
`
