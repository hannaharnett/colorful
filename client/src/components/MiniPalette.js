import React from "react";
import styled from "styled-components";

const Root = styled.main`{
  background-color: #fbd74a;
  padding: 0.5rem;
  position: relative;
  overflow: hidden;
`;

const MiniColors = styled.div`
  background-color: white;
  height: 150px
  width: 100%;
  overflow: hidden;
`;

const Title = styled.h5`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  font-family: "Raleway", sans-serif;
  color: black;
  padding-top: 0.5rem;
  font-size: 1rem;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 2.5px;
`;

const MiniColor = styled.div`
  height: 25%;
  width: 20%;
  display: inline-block;
  margin: 0 auto;
  position: relative;
  margin-bottom: -3.5px;
`;

function MiniPalette(props) {
  const { name, colors } = props;
  const miniColorBoxes = colors.map(color => (
    <MiniColor
      style={{
        backgroundColor: color.color
      }}
      key={color.name}
    />
  ));
  return (
    <Root>
      <MiniColors>{miniColorBoxes}</MiniColors>
      <Title>{name}</Title>
    </Root>
  );
}

export default MiniPalette;
