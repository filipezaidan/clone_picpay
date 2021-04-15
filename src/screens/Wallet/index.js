import React from 'react';

import { Wrapper } from './styles';

import Balance from '../../components/Wallet/Balance';
import Header from '../../components/Wallet/Header';
import Payment from '../../components/Wallet/Payment';
import Card from '../../components/Wallet/Card';

export default function Wallet() {
 return (
   <Wrapper>
     <Header/>
     <Balance/>
     <Payment/>
     <Card/>
   </Wrapper>
  );
}