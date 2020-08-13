import React from 'react';
import styled from '@emotion/styled';


const ContenedorFooter = styled.div`
  display:block;
  color:#FFF;
  height:10rem;
  text-align: center;
  font-size: 1.8rem;
  margin: 3rem 0 0 0;
  background-color:black;
  padding: 2rem 0;
`;

const Parrafo = styled.p`
    margin: 3.5rem auto;
  
`;

const Footer = () => {
    return ( 
        <ContenedorFooter>
            <Parrafo>Alejandro Montes de Oca <span>@2020</span></Parrafo>
        </ContenedorFooter>
     );
}
 
export default Footer;