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
  margin-top: 45px;
`
const Button = styled.button`
  width: 10vh;
  height: 5vh;
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
  const [step, setStep] = useState(0)

  function handleStepIncrement() {
    if (step < 5) setStep((c) => c + 1)
  }
  function handleStepDecrement() {
    if (step > 1) setStep((c) => c - 1)
  }

  function handleIncrement() {
    setCount((c) => c + step)
  }

  function handleDecrement() {
    setCount((c) => c - step)
  }

  return (
    <>
      <div>
        <p>{step}</p>
        <Buttons>
          <Button onClick={handleStepDecrement}>-</Button>
          <Button onClick={handleStepIncrement}>+</Button>
        </Buttons>
      </div>
      <div>
        <p>{count}</p>
        <Buttons>
          <Button onClick={handleDecrement}>-</Button>
          <Button onClick={handleIncrement}>+</Button>
        </Buttons>
      </div>
    </>
  )
}

export default App
