import { useState } from "react";

const Square = ({ value, onSqareClick }) => {
  //HandleSqare

  return (
    <button
      className=" h-12 w-12 bg-purple-50  border-gray-500 border-2 m-1"
      onClick={onSqareClick}
    >
      {value}
    </button>
  );
};

const Board = () => {
  const [square, setsquare] = useState(Array(9).fill(null));
  const [isNext, setisNext] = useState(true);

  const HandleSqare = (index) => {
    const newSqaure = square.slice();
    if (newSqaure[index]) {
      return;
    }
    if (isNext) {
      newSqaure[index] = "X";
    } else {
      newSqaure[index] = "O";
    }
    setsquare(newSqaure);
    setisNext(!isNext);
  };
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div>
        <div className="flex">
          <Square value={square[0]} onSqareClick={() => HandleSqare(0)} />
          <Square value={square[1]} onSqareClick={() => HandleSqare(1)} />
          <Square value={square[2]} onSqareClick={() => HandleSqare(2)} />
        </div>

        <div className="flex">
          <Square value={square[3]} onSqareClick={() => HandleSqare(3)} />
          <Square value={square[4]} onSqareClick={() => HandleSqare(4)} />
          <Square value={square[5]} onSqareClick={() => HandleSqare(5)} />
        </div>

        <div className="flex">
          <Square value={square[6]} onSqareClick={() => HandleSqare(6)} />
          <Square value={square[7]} onSqareClick={() => HandleSqare(7)} />
          <Square value={square[8]} onSqareClick={() => HandleSqare(8)} />
        </div>
      </div>
    </div>
  );
};

export default Board;
