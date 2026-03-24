import { useState } from "react"
import styled from "styled-components"

const Global = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px;
`
const Button = styled.button`
  width: 6.5vh;
  height: 5vh;
`
const ResBut = styled.button`
  width: 8vh;
  height: 5vh;
  margin-top: 15px;
`

const Input = styled.input`
  width: 30vh;
  height: 5vh;
  padding: 0.95em;
`

function App() {
  return (
    <Global>
      <Counter />
    </Global>
  )
}


function Counter() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  function handleReset() {
    setCount(0)
    setStep(1)
  }

  function handleIncrement() {
    setCount((c) => c + step)
  }

  function handleDecrement() {
    setCount((c) => c - step)
  }

  const date = new Date("March 19 2026");
  date.setDate(date.getDate() + count);

  return (
    <>
      <div>
        <p>{step}</p>

        <input
          type="range"
          min="0"
          max="5"
          value={step}
          onChange={(e) =>
            setStep(Number(e.target.value)
            )} />
      </div>

      <div>
        <Buttons>
          <Button onClick={handleDecrement}>-</Button>
          <Input type="text" value={count} onChange={(e) => setCount(Number(e.target.value))} />
          <Button onClick={handleIncrement}>+</Button>
        </Buttons>
      </div>
      <p>
        {count === 0
          ? "Today is "
          : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was`}
      </p>
      <p>{date.toDateString()}</p>

      <ResBut onClick={() => handleReset()}>Reset</ResBut>
    </>
  )
}

export default App
