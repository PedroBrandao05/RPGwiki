import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
height: max-content;
width: 100vw;
display: flex;
flex-direction: column;
`
export const Background = styled.img`
content: url(../src/assets/phandalin-true.jpeg);
width: 100vw;
height: 100vh;
mask-image: linear-gradient(0deg, rgba(255,255,255,0) 3%, rgba(0,0,0,1) 100%);
`
export const Gradient = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100vw;

`


export const Button = styled(Link)`
z-index: 3;
font-size: 18px;
color: white;
background-color: transparent;
border: 1px solid white;
cursor: pointer;
text-decoration: none;
text-align: center;
padding: 1rem;
position: absolute;

:hover{
    background-color: black;
    border: none;
}
`
