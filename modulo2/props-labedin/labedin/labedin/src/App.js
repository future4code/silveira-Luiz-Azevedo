import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande.jsx';
import CardPequeno from './components/CardPequeno.jsx';
import ImagemButton from './components/ImagemButton.jsx';
import ImagemLV from './components/img/foto-lv.jpeg';
import ImgEmail from './components/img/email.png';
import Labenu from './components/img/labenu.png';
import Autonomo from './components/img/autonomo.jpg';
import EJ from './components/img/EJ.png';
import Ufrn from './components/img/ufrn.png';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ImagemLV}
          nome="Luiz Vinícius" 
          descricao="Olá, que prazer te receber! Sou mestre em Economia e desenvolvedor em formação pela Labenu. Adoro estudar sobre a trajetória econômica dos países e descobri uma paixão pelas lógicas por trás dos códigos e pelos códigos por trás dos softwares."
        />
        
        <CardPequeno
  imagem={ImgEmail}
  texto="azevedolvinicius@hotmail.com"
  />
  <CardPequeno
  texto="Estrada do Camboatá 2966, casa 17 - Guadalupe, Rio de Janeiro/RJ - 21660-005"
  />

        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/929/929750.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={Labenu} 
          nome="Labenu" 
          descricao="Desenovolvedor Web Full Stack"
        />
        
        <CardGrande 
          imagem={Autonomo} 
          nome="Consultor Financeiro" 
          descricao="Prestação de consultoria autonomamente a empreendedores, ajudando-os a organizar suas finanças." 
        />

        <CardGrande 
          imagem={EJ} 
          nome="Estratégia Jr Consultoria" 
          descricao="Prestação de consultoria a empreendedores, ajudando-os a organizar suas finanças." 
        />

        <CardGrande 
          imagem={Ufrn} 
          nome="Universidade Federal do Rio Grande do Norte" 
          descricao="Estágio em Desenvolvimento Econômico. Aulas presenciais e remotas, plantão de dúvidas e correção de provas." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
