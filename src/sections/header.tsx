"use client";

import { useAccount, useDisconnect } from "wagmi";
import styled from "styled-components";

import Button from "@/components/button";

type Props = {
  handleConnectWallet: () => void;
};

function Header({ handleConnectWallet }: Props) {
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <Container>
      <div />

      <div>
        {isConnected ? (
          <Button onClick={disconnect}>Disconnect</Button>
        ) : (
          <Button onClick={handleConnectWallet}>Connect Wallet</Button>
        )}
      </div>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
