import styled from 'styled-components';
import React from 'react';
const DivContainer = styled.div`
display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 10px 50px;
    margin-bottom: 10px;
    height: 80px;
    justify-content: center;
`
const ImgContainer = styled.img`
    width: 30px;
    margin-right: 10px;
    margin-bottom: 10px;
`
const H4Container = styled.h4`
margin-bottom: 0px;
`
const DivStyled = styled.div`
margin-bottom: 15px;
`
function CardPequeno(props) {
    return (
        <DivContainer>
            <ImgContainer src={ props.imagem } />
            <DivStyled>
                <H4Container>{ props.texto }</H4Container>
            </DivStyled>
        </DivContainer>
    )
}

export default CardPequeno;