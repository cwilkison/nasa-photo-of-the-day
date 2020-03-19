import React from "react";
import CardPage from "./CardPage";
import "./App.css";
import styled from "styled-components";

const TitleText = styled.h1`
  margin: 3% 0;
  `;

function App() {
  return (
    <div className="App">
      <TitleText>Nasa Photo of the Day</TitleText>
      <CardPage/>
    </div>
  );
}

export default App;
