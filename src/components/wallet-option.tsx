import { useEffect } from "react";
import { useConnect } from "wagmi";
import styled from "styled-components";
import Image from "next/image";

import METAMASK_IMAGE from "@/assets/img/metamask.svg";

import Button from "@/components/button";
import Modal from "@/components/modal";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

function WalletOptions({ isOpen, handleClose }: Props) {
  const { connectors, connect, isSuccess, error } = useConnect();

  useEffect(() => {
    isSuccess && handleClose();
  }, [isSuccess, handleClose]);

  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <Container>
        <h2>Connect your wallet</h2>

        {connectors.map((connector) => (
          <Button
            key={connector.uid}
            onClick={() => connect({ connector })}
            className="button"
          >
            <Image
              src={METAMASK_IMAGE}
              width={30}
              height={30}
              alt="METAMASK"
              style={{ marginRight: "1rem" }}
            />
            {connector.name}
          </Button>
        ))}

        {error && <div className="error">{error.message}</div>}
      </Container>
    </Modal>
  );
}

export default WalletOptions;

const Container = styled.div`
  h2 {
    text-align: center;
    color: ${(props) => props.theme.colors.white};
  }

  .error {
    margin-top: 1rem;
    color: ${(props) => props.theme.colors.white};
  }

  .button {
    margin-bottom: 1rem;
    width: 100%;
    background-color: ${(props) => props.theme.colors.white};
  }
`;
