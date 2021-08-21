import styled, {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
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
export default GlobalStyle
