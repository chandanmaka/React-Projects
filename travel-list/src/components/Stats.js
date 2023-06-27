export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        <em>Start adding items to the list 🚀</em>
      </footer>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentagePacked = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      {percentagePacked === 100 ? (
        <em>You are ready to go ✈</em>
      ) : (
        <em>
          🍺 You have {numItems} items on your list, and you already packed{" "}
          {numPacked} ({percentagePacked}%)
        </em>
      )}
    </footer>
  );
}
