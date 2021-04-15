import React from 'react';
import { Wrapper, Container } from './styles';

import Header from '../../components/Home/Header';
import Suggestions from '../../components/Home/Suggestions';
import Activities from '../../components/Home/Activities';
import Tips from '../../components/Home/Tips';
import Banner from '../../components/Home/Banner';

export default function Home() {
 return (
   <Wrapper>
    <Container>
      <Header/>
      <Suggestions/>
      <Activities/>
      <Tips/>
      <Banner/>
    </Container>
   </Wrapper>
  );
}