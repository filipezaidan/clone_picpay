import React from 'react';
import { Switch } from 'react-native';

import { BalanceContainer, BalanceTitle } from './styles';

export default function Balance() {
 return ( 
    <BalanceContainer>
        <BalanceTitle>Usar saldo ao pagar</BalanceTitle>
        <Switch/>
    </BalanceContainer>
  );
}