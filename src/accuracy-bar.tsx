import { useGlobalContext } from "./context"

export const AccuracyBar = () => {
  const { answersCorrect, answersIncorrect, problemsRemaining } =
    useGlobalContext()
  const total = answersCorrect + answersIncorrect + problemsRemaining
  const percentCorrect = (answersCorrect / total) * 100
  const percentIncorrect = (answersIncorrect / total) * 100
  const percentRemaining = (problemsRemaining / total) * 100
  return (
    <div
      style={{
        display: "flex",
        margin: "8px 0px",
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          background: " #f44336",
          height: 40,
          width: `${percentIncorrect}%`,
        }}
      />
      <div
        style={{
          background: "#4caf50",
          height: 40,
          width: `${percentCorrect}%`,
        }}
      />
      <div
        style={{
          background: "#d3d3d3",
          height: 40,
          width: `${percentRemaining}%`,
        }}
      />
    </div>
  )
}
