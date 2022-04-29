import styled from "styled-components"
export const CardTripContainer = styled.div`
background-color: rgb(46,139,87, 0.7);
margin: 5px;
text-align: center;
border: 2px solid green;
border-radius: 15px;
height: 5rem;
width: 20rem;
display: flex;
align-items: center;
justify-content: space-between;
    p{
        margin: 5px;
    }
    button{
        cursor:pointer;
        margin: 5px;
        width: 1rem;
        }
        span{
            cursor:pointer;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 15px;
            :hover{
background-color: rgb(46,139,87, 0.9)
            }
        }
`