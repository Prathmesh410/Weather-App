import React from "react";
import styled from "styled-components";
import City from "./modules/CityComponent"
import Weather from "./modules/WeatherComponent"

const Container = styled.div`
  display : flex;
  flex-direction : column;
  margin :100px auto;
  align-items : center;
  box-shadow : 0 3px 6px 0 #555;
  padding: 20px 10px;
  border-radius : 4px;
  width : 300px;
  
  background: #f2ffff;
  font-family : Ubuntu;

`

const Heading = styled.span`
color : black;
font-size : 20 px;
font-weight : bold;

`

const App =() => {
  return (
   <Container>
     <h1>Weather App</h1>
     {/* <City/> */}
     <Weather/>
     
   </Container>
     

  );
}

export default App;
