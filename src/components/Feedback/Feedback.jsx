function Feedback({ feedback, totalFeedback, positiveFeedback }) {
  return totalFeedback > 0 ? (
    <div>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total:{totalFeedback}</p>
      <p>Positive feedback : {positiveFeedback}%</p>
    </div>
  ) : null;
}

export default Feedback;
