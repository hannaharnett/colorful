import React, { Component } from "react";
import styled from "styled-components";
import MiniPalette from "./MiniPalette";

const Root = styled.main`
  background-color: #dd332f;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const Container = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Nav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-family: "Playfair Display", serif;
  color: #0c2695;
  font-size: 3rem;
  font-style: italic;
`;

const Palettes = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-gap: 5%;
`;

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <Root>
        <Container>
          <Nav>
            <Title>colorful</Title>
          </Nav>
          <Palettes>
            {palettes.map(palette => (
              <MiniPalette {...palette} />
            ))}
          </Palettes>
        </Container>
      </Root>
    );
  }
}

export default PaletteList;
