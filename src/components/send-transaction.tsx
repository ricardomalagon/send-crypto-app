import {
  type BaseError,
  useSendTransaction,
  useWaitForTransactionReceipt,
} from "wagmi";
import { parseEther } from "viem";
import styled from "styled-components";
import { useBalance, useAccount } from "wagmi";

import Button from "./button";
import Input from "./input";

function SendTransaction() {
  const { address } = useAccount();

  const {
    data: hash,
    error,
    isPending,
    sendTransaction,
  } = useSendTransaction();

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  const { data } = useBalance({ address });

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const to = formData.get("address") as `0x${string}`;
    const value = formData.get("value") as string;
    sendTransaction({ to, value: parseEther(value) });
  }

  return (
    <Container>
      <form onSubmit={submit}>
        <Input name="address" placeholder="Receiver Address" />
        <Input name="value" placeholder="Amount (ETH)" />

        {data && (
          <div className="balance">Your balance: {data?.formatted} ETH</div>
        )}

        <Button disabled={isPending} type="submit" className="send-button">
          {isPending ? "Confirming..." : "Send"}
        </Button>

        {hash && <div className="message">Transaction Hash: {hash}</div>}

        {isConfirming && (
          <div className="message">Waiting for confirmation...</div>
        )}

        {isConfirmed && <div className="message">Transaction confirmed.</div>}

        {error && (
          <div className="message">
            Error: {(error as BaseError).shortMessage || error.message}
          </div>
        )}
      </form>
    </Container>
  );
}
export default SendTransaction;

const Container = styled.div`
  padding: 2rem;
  border-radius: 8px;
  width: 20rem;
  background-color: ${(props) => props.theme.colors.lightBlack};

  @media (max-width: 920px) {
    width: calc(100% - 4rem);
  }

  .balance {
    font-size: 14px;
    margin-top: 1rem;
    color: ${(props) => props.theme.colors.white};
  }

  .send-button {
    margin-top: 1.5rem;
    width: 100%;
  }

  .message {
    margin-top: 1rem;
    color: ${(props) => props.theme.colors.white};
  }
`;
