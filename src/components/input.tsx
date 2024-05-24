import React from "react";
import styled from "styled-components";

const MyTextField = (props: any) => {
  return (
    <Wrapper style={props.styleWrapper}>
      <div className="container">
        <input className="input" {...props} />
      </div>
    </Wrapper>
  );
};

function Input(props: any) {
  return <MyTextField {...props} />;
}

export default Input;

const Wrapper = styled.div`
  margin-top: 1.25rem;
  width: 100%;

  .container {
    display: flex;
    flex-direction: column;
  }

  .input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    padding: 0 1rem;
    height: 2.5rem;
    border: 1px solid rgba(47, 48, 55, 0.2);
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.background};
    font-size: 1rem;
    color: ${(props) => props.theme.colors.white};

    &:focus {
      outline: none;
      border: 2px solid ${(props) => props.theme.colors.main};
    }
  }
`;
