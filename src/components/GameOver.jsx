export default function GameOver({ winnerName, onRestart }) {
  return (
    <div id="game-over">
      <h2>GAME OVER!</h2>
      {winnerName && <p>{winnerName} won!</p>}
      {!winnerName && <p> Draw! </p>}
      <p>
        <button onClick={onRestart}>Rematch</button>
      </p>
    </div>
  );
}
