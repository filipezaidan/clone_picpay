import React from 'react';
import { Switch } from 'react-native';

import { BalanceContainer, BalanceTitle } from './styles';

export default function Balance({ value, onChangeUseBalance }) {
 return ( 
    <BalanceContainer>
        <BalanceTitle>Usar saldo ao pagar</BalanceTitle>
        <Switch value={value} onValueChange={() => onChangeUseBalance(value)}/>
    </BalanceContainer>
  );
}