import { useState } from "react";
import Box from "./Box";
import Details from "./Details";
import Description from "./Description";
import Modal from "react-modal";
import ViewRulesModal from "./Modal";

import { nftList, lotteryList } from "./mockdata";
import { lottery, nft } from "./constants";

function App() {
  const [lotteryType, setLotteryType] = useState("");
  const [nftInfo, setNftInfo] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);

  Modal.setAppElement("#root");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const getLotterySelected = (id) => {
    const getLotteryInfo = nftList.find((x) => x.id === id);
    setNftInfo({
      headers: getLotteryInfo.lotteryHeader,
      description: getLotteryInfo.description,
      rules: getLotteryInfo.rules,
      nftList: getLotteryInfo.nfts,
    });
  };

  const handleClick = (value) => {
    if (value.type !== nft) {
      setLotteryType(value.type);
      getLotterySelected(value.id);
    } else {
      setLotteryType(nft);
    }
  };

  const displayModal = () => {
    openModal();
  };

  return (
    <div className="App">
      {lotteryType === lottery ? (
        <div className="nft-detail-container">
          <Details {...nftInfo.headers} handleModalClick={displayModal} />
          <Description content={nftInfo.description} />

          <div className="border"></div>
          <div className="nft-container">
            {nftInfo.nftList.map((nftData, index) => (
              <Box
                name={nftData.name}
                number={index + 1}
                id={nftData.id}
                type={nft}
                key={index + 1}
                handleClick={handleClick}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="main-container">
          <h3>Select A Lottery</h3>
          <div className="lottery-container">
            {lotteryList.map((x, index) => (
              <Box
                name={x.name}
                number={index + 1}
                id={x.id}
                type={lottery}
                handleClick={handleClick}
                key={index + 1}
              />
            ))}
          </div>
        </div>
      )}
      <ViewRulesModal
        openModal={openModal}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        content={nftInfo.rules}
      />
    </div>
  );
}
export default App;
