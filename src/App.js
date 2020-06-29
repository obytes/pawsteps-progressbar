import React, { useState } from "react";

import generatePaws from "./generate-paws";
import * as styles from "./styles";

const PAW_HEIGHT = 40;
const PAW_WIDTH = 4.44;
const pawsteps = generatePaws({
  spacing: 0.55,
  width: PAW_WIDTH,
  height: PAW_HEIGHT,
});

function App() {
  const [range, setRange] = useState(0);
  const handleChangeRange = (e) => {
    setRange(e.target.value);
  };

  return (
    <styles.Container>
      <styles.Header>
        <h1>Progress: {range}%</h1>
        <input type="range" value={range} onChange={handleChangeRange} />
      </styles.Header>
      <div className="progressbar">
        <styles.Wrapper>
          {pawsteps.map(({ x, y, rotate }, id) => {
            const diff = range - x;
            const percentage = Math.min(
              Math.max((diff * 100) / PAW_WIDTH, 0),
              100
            );

            return (
              <styles.PawIcon
                key={id}
                id={id}
                x={x}
                y={y}
                rotate={rotate}
                percentage={percentage}
                height={PAW_HEIGHT}
                width={PAW_WIDTH}
              />
            );
          })}
        </styles.Wrapper>
      </div>
    </styles.Container>
  );
}

export default App;
