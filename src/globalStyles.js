import styled, {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Source Sans Pro", sans-serif;

}
`
export const Container = styled.div`
z-index:1;
width: 100%;
max-width: 1300px;
margin: auto;
padding: 0 50px;

@media screen and (max-width:990px) {
    padding: 0 30px;
}
`

export const Button = styled.button`
border-radius: 4px;
background: ${({primary}) => (primary ? "#4B59F7" : "#0467FB")};
padding: ${({big}) => (big ? "12px 64px" : "10px 20px")};
color: #fff;
font-size: ${({fontBig}) => (fontBig ? "20px" : "16px")};
border-radius: 4px;
border: 1px solid black;
cursor: pointer;

&:hover{
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({primary}) => (primary ? "#0467FB" : "#4B59F7")};
}

@media screen and (max-width: 960px) {
}
`


export default GlobalStyle
