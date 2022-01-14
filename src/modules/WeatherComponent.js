import React from "react";
import styled from "styled-components";


const WeatherCondition =styled.div`
display : flex;
flex-direction : row;
align-items: center;
width : 100%;
justify-content:space-between;
margin: 30px auto;



`
const Condition =styled.span`
margin: 20px auto;
font-size: 14px;
& span {
     font-size : 28px;
}




`
const WeatherIcon =styled.img`
width: 100px;
height: 100px;
margin: 5px auto;

`
const Location =styled.span`
font-size : 28px;
font-weight : bold;


`
const WeatherInfo =styled.span`
font-size : 14px;
font-weight : bold;
margin: 20px 25px 10px;
text-align: start;



`

const WeatherinfoContainer = styled.div`
display : flex;
width ; 90%;
flex-direction: row;
justify-content: space-evenly;
align-item= center;
flex-wrap:wrap;
`
const InfoContainer = styled.div`
     display : flex;
     margin: 5px 10px;
     flex-direction: row;
     justify-content: space-evenly;
     align-items:center;
`
const InfoIcon = styled.img`
width: 36px;
height: 36px;
`
const InfoLable = styled.span`
display : flex;
flex-direction: column;
font-size: 14px;
margin: 15px;
& span {
     font-size: 12px;
     text-transform: capitalize;

}
`
const WeatherinfoComponent= (props) => {
     return(
          <InfoContainer>
               <InfoIcon/>
               <InfoLable>
                    12 : 00 
                    <span>{props.name}</span>
               </InfoLable>
          </InfoContainer>
     )
}
const WeatherComponent = () => {
     return(
        <>
          <WeatherCondition>
               <Condition><span>30 c</span><span> | Cloudy</span></Condition>
               <WeatherIcon src="public\icons\weatherWithLighting.png"/>
          </WeatherCondition>
          <Location>London,GB</Location>
          <WeatherInfo>Weather Information</WeatherInfo>
               <WeatherinfoContainer>
                    <WeatherinfoComponent name="sunrise" value="" />
                    <WeatherinfoComponent name="humidity" value="" />
                    <WeatherinfoComponent name="wind" value="" />
                    <WeatherinfoComponent name="pressure" value="" />
               </WeatherinfoContainer>
        </>
     )

};
export default WeatherComponent;