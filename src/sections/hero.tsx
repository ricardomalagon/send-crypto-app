"use client";

import { useState } from "react";

import { useAccount } from "wagmi";
import styled from "styled-components";

import WalletOptions from "@/components/wallet-option";
import Button from "@/components/button";
import SendTransaction from "@/components/send-transaction";
import CryptoPrice from "@/sections/crypto-price";

import Header from "@/sections/header";

function Hero() {
  const { isConnected } = useAccount();

  const [isWalletOptionsOpen, setIsWalletOptionsOpen] = useState(false);

  return (
    <>
      <WalletOptions
        isOpen={isWalletOptionsOpen}
        handleClose={() => setIsWalletOptionsOpen(false)}
      />

      <Wrapper>
        <Header handleConnectWallet={() => setIsWalletOptionsOpen(true)} />

        <Container>
          <div className="title-container">
            <h1>Start sending Crypto Easily</h1>

            {isConnected ? (
              <SendTransaction />
            ) : (
              <Button onClick={() => setIsWalletOptionsOpen(true)}>
                Connect Wallet
              </Button>
            )}
          </div>

          <CryptoPrice />
        </Container>
      </Wrapper>
    </>
  );
}

export default Hero;

const Wrapper = styled.div`
  padding: 2rem 0rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 0;

  @media (max-width: 920px) {
    flex-direction: column-reverse;
  }

  .title-container {
    width: 100%;
    max-width: 40rem;

    @media (max-width: 920px) {
      margin-top: 1.5rem;
    }
  }

  h1 {
    color: ${(props) => props.theme.colors.white};
    font-size: 3rem;

    @media (max-width: 920px) {
      font-size: 2rem;
    }
  }
`;
