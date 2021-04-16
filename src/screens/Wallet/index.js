import React, { useState, useEffect} from 'react';

import { Wrapper } from './styles';

import Balance from '../../components/Wallet/Balance';
import Header from '../../components/Wallet/Header';
import Payment from '../../components/Wallet/Payment';
import Card from '../../components/Wallet/Card';
import Ticket from '../../components/Wallet/Ticket';

export default function Wallet() {
  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);
  
  function handleToggleVisibility(value){
    setIsVisible(!value);
  }

  function handleToggleUseBalance(value){
    setUseBalance(!value);
  }

  return (
   <Wrapper>
     <Header value={isVisible} onChangeVisibility={handleToggleVisibility} valueBalance={useBalance}/>
     <Balance value={useBalance} onChangeUseBalance={handleToggleUseBalance}/>
     <Payment/>
     <Card/>
     <Ticket/>
   </Wrapper>
  );
}