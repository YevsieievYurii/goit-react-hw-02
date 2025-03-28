function Options({ updateFeedback }) {
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
    </div>
  );
}
export default Options;
