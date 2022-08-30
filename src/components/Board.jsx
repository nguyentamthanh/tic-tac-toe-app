import Box from "./Box";

const Board = ({ board, onclick }) => {
  return (
    <div>
      {board.map((value, idx) => {
        return <Box />;
      })}
    </div>
  );
};
