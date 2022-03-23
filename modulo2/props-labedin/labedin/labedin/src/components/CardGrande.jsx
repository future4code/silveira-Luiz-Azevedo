import React from 'react';
import styled from 'styled-components';
const DivContainer = styled.div`
display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const ImgContainer = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const H4Container = styled.h4`
margin-bottom: 0px;
`
const DivStyled = styled.div`
display: flex;
    flex-direction: column;
    justify-items: flex-start;
`
function CardPequeno(props) {
    return (
        <DivContainer>
            <ImgContainer src={ props.imagem } />
            <DivStyled>
                <H4Container>{ props.texto }</H4Container>
                <p>{ props.descricao }</p>
            </DivStyled>
        </DivContainer>
    )
}

export default CardPequeno;