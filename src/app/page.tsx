"use client";

import styled from "styled-components";

import Hero from "@/sections/hero";

import Wrapper from "@/components/container";

function Profile() {
  return (
    <Container>
      <Wrapper>
        <Hero />
      </Wrapper>
    </Container>
  );
}

export default Profile;

const Container = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
`;
