import React from 'react';

import { Wrapper } from './styles';

import Balance from '../../components/Wallet/Balance';
import Header from '../../components/Wallet/Header';

export default function Wallet() {
 return (
   <Wrapper>
     <Header/>
     <Balance/>
   </Wrapper>
  );
}