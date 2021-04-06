import styled from "styled-components";

export const PantallaStyled = styled.input `
width : 100%;
border-radius: 1%;
background-color: #f2f2f2;
border: 1px solid black;
height: 50px
`;

export const ContenedorStyled = styled.div `
width : 325px;
margin:auto;
`;
export const ContenedorBotonesStyled = styled.div `
display: flex;
flex-direction:row;
width: 100%;

`;

export const NumerosStyled = styled.button `

// height: 40%;
width: 62px;
background-color: gray;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid black
`;

export const ContenedorNumerosStyled = styled.div `
width:186px;
padding:0px;
margin: 0px;
display:flex;
flex-direction-row;
flex-wrap: wrap;
& :hover {
    cursor:pointer;
    background-color: #4e4c4c;
    
};
`;

export const ContenedorOperadoresStyled = styled.div`
width:133px;
padding:0px;
margin: 0px;
display:flex;
flex-direction-row;
flex-wrap: wrap;
& :hover {
    cursor:pointer;
    background-color: gray;
    
};
`;

export const OperadoresStyled = styled.button`
width: 130px;
background-color: #c6c6c6;
display: flex;
justify-content: center;
border: 1px solid black;
`;
