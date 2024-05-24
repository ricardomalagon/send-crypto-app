import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  disabled?: boolean;
  isLoading?: boolean;
  type?: "submit";
  className?: string;
};

function Button({ children, ...props }: Props) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

export default Button;

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12rem;
  height: 3rem;
  border-radius: 6px;
  box-sizing: border-box;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.black};
  font-weight: 600;
  border: 0;
  font-size: 1rem;
`;
