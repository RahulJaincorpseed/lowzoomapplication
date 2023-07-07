import "rsuite/dist/rsuite.min.css"
import { Progress, ButtonGroup, Button } from "rsuite"
import { useState } from "react"

import React from "react"

const ProgressBar = () => {
  const [percent, setPercent] = useState(20)

  const decrease = () => {
    const value = Math.max(percent - 25, 0)
    setPercent(value)
  }

  const increase = () => {
    const value = Math.min(percent + 25, 100)
    setPercent(value)
  }

  const status = percent === 100 ? "success" : null
  const color = percent === 100 ? "#03D613" : "#02749C"

  return (
    <div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h2>GeeksforGeeks</h2>
        <h4
          style={{
            color: "green",
          }}
        >
          React Suite Progress Dynamic
        </h4>
      </div>
      <div
        style={{
          padding: 20,
          textAlign: "center",
        }}
      >
        <div>
          <ButtonGroup>
            <Button onClick={decrease}>-</Button>
            <Button onClick={increase}>+</Button>
          </ButtonGroup>
          <hr />
          <Progress.Line
            percent={percent}
            strokeColor={color}
            status={status}
          />
        </div>
      </div>
    </div>
  )
}

export default ProgressBar

// export default function App() {
// 	return (
// 		<div>
// 			<div style={
// 				{
// 					textAlign: "center"
// 				}}>
// 				<h2>GeeksforGeeks</h2>
// 				<h4 style={
// 					{
// 						color: "green"
// 					}}>React Suite Progress Dynamic
// 				</h4>
// 			</div>
// 			<div style={
// 				{
// 					padding: 20,
// 					textAlign: "center"
// 				}}>
// 				<div>
// 					<ButtonGroup>
// 						<Button onClick={decrease}>
// 							-
// 						</Button>
// 						<Button onClick={increase}>
// 							+
// 						</Button>
// 					</ButtonGroup>
// 					<hr />
// 					<Progress.Line
// 						percent={percent}
// 						strokeColor={color}
// 						status={status}
// 					/>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
