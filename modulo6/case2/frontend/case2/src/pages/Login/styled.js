import styled from "styled-components";

export const ScreenContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const LogoImg = styled.img`
max-width: 200px;
max-height: 300px;
`
export const InputsContainer = styled.div`
display: flex;
flex-direction: column;
width: 80vw;
max-width: 450px;
align-items: center;
margin-bottom: 20px;
`
export const SingupButton = styled.div`
margin: 5px;
margin-left: 0;
width: 100%;
` 

export const Body = styled.div`
display: flex;
flex-direction: column;
header{
  height: 80px;
  display: flex;
  justify-content: space-between;
  background-color: rgb(25,25,230, 0.8);
  button{
      height: 30px;
      background-color: rgb(25,25,230, 0.2);
      border-radius: 5px;
      padding: 1rem;
      border-style: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      :hover{
        background-color: rgb(60,179,113, 0.2);
        color: white;
      }
      }
}
main{
  flex-grow: 1;
  display:flex;
  flex-direction: row;
  justify-content: center;
}
`
export const HeaderButtonDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
form{
    display: flex;
    flex-direction: row;
    margin-left: 7rem;
}
button{
    margin-right: 1rem;
}
`