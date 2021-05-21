function Details({
  name,
  grade,
  numberOfNfts,
  currentLotteryNumber,
  handleModalClick,
}) {
  return (
    <div className="details-container">
      <div className="detail-title">Lottery Number {currentLotteryNumber}</div>
      <ul>
        <ol>Artist: {name}</ol>
        <ol>Grade: {grade}</ol>
        <ol>Number: {numberOfNfts}</ol>
        <ol type="button" className="view-rules" onClick={handleModalClick}>
          View Rules
        </ol>
      </ul>
    </div>
  );
}

export default Details;
