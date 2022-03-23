import React from 'react';
import styled from 'styled-components';

const DivContainer = styled.div`
display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
`
const ImgDiv = styled.img`
    width: 30px;
    margin-right: 10px;
`

function ImagemButton(props) {
    return (
        <DivContainer>
            <a href={props.link}>
            <ImgDiv src={props.imagem}/>
            </a>
            <p>{ props.texto }</p>
        </DivContainer>
    )
}

export default ImagemButton;