export default function Log({ gameTurnsInfo }) {
  return (
    <ol id="log">
      {gameTurnsInfo.map((turnInfo) => (
        <li key={`${turnInfo.square.rowIndex}${turnInfo.square.colIndex}`}>
          Player {turnInfo.player} selected [{turnInfo.square.rowIndex},
          {turnInfo.square.colIndex}]
        </li>
      ))}
    </ol>
  );
}
