import React, { useState } from "react";
import "./memory.scss";

const MemoryGame = () => {
  const [grid, setGrid] = useState([
    [0, 3, 0, 1],
    [2, 3, 2, 1],
    [5, 4, 4, 5],
  ]);

  const [revealed, setRevealed] = useState(
    new Array(grid.length)
      .fill("")
      .map(() => new Array(grid[0].length).fill(false))
  );

  const [prevClicked, setPrevClicked] = useState();

  const handleCardClick = (rowIndex, colIndex) => {
    const clickedNumber = grid[rowIndex][colIndex];
    const newRevealed = [...revealed];
    newRevealed[rowIndex][colIndex] = true;
    setRevealed(newRevealed);

    if (prevClicked) {
      const prevClickedNum = grid[prevClicked.row][prevClicked.col];
      if (prevClickedNum !== clickedNumber) {
        setTimeout(() => {
          newRevealed[rowIndex][colIndex] = false;
          newRevealed[prevClicked.row][prevClicked.col] = false;

          setRevealed([...newRevealed]);
        }, 1000);
      }
      setPrevClicked(undefined);
    } else {
      setPrevClicked({ row: rowIndex, col: colIndex });
    }
  };

  return (
    <div>
      <h3>Memory Game!</h3>

      <div>
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((number, colIndex) => (
              <div
                key={colIndex}
                className="number"
                onClick={() => handleCardClick(rowIndex, colIndex)}
              >
                {revealed[rowIndex][colIndex] ? number : " "}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;
