import React from 'react';

import { Container, Details, Img, Title, Description, } from './styles';

export default function Banner() {
 return (
   <Container>
      <Details>
        <Title>Cobre um amigo</Title>
        <Description>
          Mantenha suas parceriasem dia, use o PicPay para fazer suas cobranças.
        </Description>
      </Details>

      <Img source={require("../../assets/img/13.png")}/>
   </Container>
  );
}