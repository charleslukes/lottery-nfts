function Details({ name, grade, numberOfNfts, currentLotteryNumber }) {
  return (
    <div className="details-container">
      <div className="detail-title">Lottery Number {currentLotteryNumber}</div>
      <ul>
        <ol>Artist: {name}</ol>
        <ol>Grade: {grade}</ol>
        <ol>Number: {numberOfNfts}</ol>
      </ul>
    </div>
  );
}

export default Details;
