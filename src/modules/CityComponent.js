
import React from "react";
import styled from "styled-components";

const Weatherlogo =styled.img`
width: 140px;
height: 140px;
margin: 40px auto;
`
const ChooseCity =styled.span`
color:black;
text-align:center;
font-size:20pxpx;
font-weight:bold;
display:block;
margin: 10px auto;
`
const SearchBox =styled.form`
display: flex;
flex-directions: row;
border: black solid 2px;
border-radius: 2px;
color:black;
font-size:10px;
font-weight:bold;
& input{
    padding: 10px;
    font-size : 14px;
    border : none;
    outline: none;
    font weight: bold

}
& button{
    color : white;
    background-color: #333;
    padding: 10px;
    font-size : 14px;
    border : none;
    outline: none;
    font weight: bold;
    

}

`

const CityComponent = () => {
   return (
    <div>
        <Weatherlogo src="public\icons\weatherWithLighting.png"/>
        <ChooseCity>Find Weather of Your City</ChooseCity>
        <SearchBox>
            <input placeholder="City Name"/>
            <button>Search</button>
        </SearchBox>
    </div>
       
   )
};
export default CityComponent;