function Options({ updateFeedback, resetFeedback, totalFeedback }) {
  return (
    <div className="btn-container">
      <button className="btn" onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className="btn" onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className="btn" onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className="btn" onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}
export default Options;
