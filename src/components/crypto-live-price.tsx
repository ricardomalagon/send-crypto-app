"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

import styled from "styled-components";

import { CryptoLiveType } from "@/types/crypto";

function CryptoLivePrice({ name, icon, url }: CryptoLiveType) {
  const priceRef = useRef<any>(null);

  useEffect(() => {
    function handlePrice() {
      const socket = new WebSocket(url);

      socket.onmessage = (event) => {
        let eventData = JSON.parse(event.data);
        const btcPrice = Number(eventData.p);

        const formattedNumber = new Intl.NumberFormat("en-US", {
          style: "decimal",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(btcPrice);

        priceRef.current.textContent = `$${formattedNumber}`;
      };

      socket.onerror = (error) => {
        console.error("Error en la conexión WebSocket:", error);
      };

      socket.onclose = (event) => {
        console.log("Conexión WebSocket cerrada:", event.reason);
      };

      return () => {
        socket.close();
      };
    }

    url && handlePrice();
  }, [url]);

  return (
    <Wrapper>
      <div className="crypto-container">
        <div className="icon-name">
          <Image src={icon} width={32} height={32} alt="BTC" />
          <span className="crypto">{name}</span>
        </div>

        <p ref={priceRef} style={{ color: "white" }}>
          Loading...
        </p>
      </div>
    </Wrapper>
  );
}

export default CryptoLivePrice;

const Wrapper = styled.div`
  .crypto-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .icon-name {
    display: flex;
    align-items: center;
  }

  .crypto {
    margin-left: 1rem;
    color: ${(props) => props.theme.colors.white};
    font-weight: 500;
  }
`;
