import React from 'react';
import { Wrapper, Container } from './styles';


import Header from '../../components/Header';
import Suggestions from '../../components/Suggestions';

export default function Home() {
 return (
   <Wrapper>
    <Container>
      <Header/>

      <Suggestions/>
    </Container>
   </Wrapper>
  );
}