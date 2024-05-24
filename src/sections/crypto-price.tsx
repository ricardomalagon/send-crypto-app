"use client";

import styled from "styled-components";

import CryptoLivePrice from "@/components/crypto-live-price";

import BTC_IMAGE from "@/assets/img/bitcoin.png";
import ETH_IMAGE from "@/assets/img/eth.svg";
import SOL_IMAGE from "@/assets/img/solana.svg";

import { CryptoLiveType } from "@/types/crypto";

const cryptoList: CryptoLiveType[] = [
  {
    name: "BTC",
    icon: BTC_IMAGE,
    url: "wss://stream.binance.com:9443/ws/btcusdt@trade",
  },
  {
    name: "ETH",
    icon: ETH_IMAGE,
    url: "wss://stream.binance.com:9443/ws/ethusdt@trade",
  },
  {
    name: "SOL",
    icon: SOL_IMAGE,
    url: "wss://stream.binance.com:9443/ws/solusdt@trade",
  },
];

function CryptoPrice() {
  return (
    <Wrapper>
      <h1 className="title">Crypto Price</h1>

      {cryptoList.map((item) => (
        <CryptoLivePrice key={item.name} {...item} />
      ))}
    </Wrapper>
  );
}

export default CryptoPrice;

const Wrapper = styled.div`
  padding: 1rem 2rem;
  border-radius: 8px;
  width: 20rem;
  background-color: ${(props) => props.theme.colors.lightBlack};

  @media (max-width: 920px) {
    width: calc(100% - 4rem);
  }

  .title {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.white};
    font-weight: 600;
  }
`;
