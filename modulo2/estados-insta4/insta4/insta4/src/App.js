import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import FotoLV from './img/foto-lv.jpeg';
import FotoThay from './img/thay.PNG';
import Casal from './img/lv-thay.PNG';
import Casal1 from './img/casal.PNG';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'elive'}
          fotoUsuario={FotoLV}
          fotoPost={Casal}
        />
        <Post
          nomeUsuario={'thay'}
          fotoUsuario={FotoThay}
          fotoPost={Casal1}
        />
      </MainContainer>
    );
  }
}

export default App;
