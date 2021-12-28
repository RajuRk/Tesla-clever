import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model 3"
        description="Online Order for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
