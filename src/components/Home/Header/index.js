import React from 'react';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { Container, BalanceContainer, BalanceTitle, Balance} from './styles';

export default function Header() {
 return (
   <Container>
       <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />

       <BalanceContainer>
           <BalanceTitle>Meu Saldo</BalanceTitle>
           <Balance>R$ 0,00</Balance>
       </BalanceContainer>

       <AntDesign name="gift" size={30} color="#10c86e"/>
   </Container>
  );
}